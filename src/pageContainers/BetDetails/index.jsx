import { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'

import { useGame, useModal } from 'src/hooks'
import { PageContainer } from 'src/appLayout/styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
import Header from './Header'
import TicketCard from './TicketCard'
import BetDetailsBanner from './BetDetailsBanner'
import useBetDetails from './useBetDetails'
import {
  BetsPlacedHeaderWrapper,
  TicketContainerWrapper,
  TicketListWrapper,
  DividerWrapper,
} from './styles'

export default function BetDetails({ proxyAddress }) {
  const [winnerInfo, setWinnerInfo] = useState({})
  const [winnerDeclared, setWinnerDeclared] = useState(false)
  const {
    loading,
    proxyData,
    betsLoading,
    allBets,
    withdrawals,
    withdrawalsLoading,
  } = useBetDetails(proxyAddress)

  const { mockFindWinner, getWinner } = useGame(proxyAddress)

  const { Modal, openModal } = useModal(proxyData, 'PLACE_BET')

  const handleOpenPlaceBet = (event) => {
    event.stopPropagation()
    openModal()
  }

  const handleFindWinner = async (event) => {
    event?.stopPropagation()
    const res = await mockFindWinner()
    setWinnerInfo(res)
    const winner = await getWinner()
    console.log({ winner })
    setWinnerDeclared(winner?.winnerTicket !== '0')
  }

  const bettingPeriodEndsAt = proxyData?.bettingPeriodEndsAt
  const lockInPeriodEndsAt = proxyData?.lockInPeriodEndsAt
  const currentTime = useRef(new Date().getTime() / 1000).current

  useEffect(() => {
    if (
      currentTime > lockInPeriodEndsAt &&
      !winnerDeclared &&
      winnerInfo !== {} &&
      allBets?.length > 0
    ) {
      handleFindWinner()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockInPeriodEndsAt, currentTime, allBets?.length])

  const renderData = () => {
    if (loading) return <Placeholder label1="loading bets..." />
    if (!proxyData)
      return (
        <Placeholder
          label1="No data"
          label2="Create bets to start staking and earn interest"
        />
      )

    return (
      <>
        <BetDetailsBanner data={proxyData} />
        <TicketContainerWrapper>
          <BetsPlacedHeaderWrapper>
            <Typography type="p24" color="white">
              Bets Placed
            </Typography>
            {currentTime > bettingPeriodEndsAt || betsLoading ? null : (
              <div className="button-section">
                <Button label="Place Bet" onClick={handleOpenPlaceBet} />
              </div>
            )}
            {winnerInfo?.winnerTicket && (
              <Box marginLeft={'auto'}>
                <Typography type="p24" color="white">
                  Winner: {winnerInfo?.winnerTicket}
                </Typography>
              </Box>
            )}
          </BetsPlacedHeaderWrapper>
          <TicketListWrapper>
            {allBets?.map((bet, index) => {
              return (
                <div key={bet.tokenId}>
                  <TicketCard
                    data={bet}
                    stakeAmount={proxyData.stakeAmount}
                    isWinner={
                      bet.tokenId == winnerInfo?.winnerTicket && !winnerDeclared
                    }
                    isWithdrawn={withdrawals?.some(
                      (event) => event.tokenId === bet.tokenId,
                    )}
                    withdrawalsLoading={withdrawalsLoading}
                    withdrawDisabled={
                      currentTime < lockInPeriodEndsAt &&
                      currentTime > bettingPeriodEndsAt
                    }
                  />
                  {allBets.length - 1 === index ? null : <DividerWrapper />}
                </div>
              )
            })}
          </TicketListWrapper>
        </TicketContainerWrapper>
      </>
    )
  }

  return (
    <PageContainer>
      <Header betName={proxyData?.factoryName} />
      <Fallback>{renderData()}</Fallback>
      <Modal />
    </PageContainer>
  )
}
