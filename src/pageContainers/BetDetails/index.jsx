import { PageContainer } from 'src/appLayout/styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Header from './Header'
import TicketCard from './TicketCard'
import BetDetailsBanner from './BetDetailsBanner'
import {
  BetsPlacedHeaderWrapper,
  TicketContainerWrapper,
  TicketListWrapper,
  DividerWrapper,
} from './styles'
import { useGame, useModal } from 'src/hooks'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
import useBetDetails from './useBetDetails'
import { useEffect, useState, useCallback, useRef } from 'react'
import { Box } from '@mui/material'

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

  const handleFindWinner = useCallback(
    async (event) => {
      event?.stopPropagation()
      const res = await mockFindWinner()
      setWinnerInfo(res)
      const winner = await getWinner()
      setWinnerDeclared(!!winner?.winnerTicket)
    },
    [getWinner, mockFindWinner],
  )

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
      console.log('find winner')
      handleFindWinner()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockInPeriodEndsAt, currentTime, handleFindWinner, allBets?.length])

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
