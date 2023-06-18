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
import { useModal } from 'src/hooks'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
import { useRouter } from 'next/router'
import { BaseContext } from 'src/context/BaseContext'
import { useContext, useState, useEffect } from 'react'
import { useGetAllBetsOfAProxy } from 'src/queries'
import useBetDetails from './useBetDetails'

export default function BetDetails() {
  const router = useRouter()

  const { address } = router.query
  const { loading, proxyData, betsLoading, allBets } = useBetDetails(address)

  const tickets = [1, 2, 3, 5, 6]

  const { Modal, openModal } = useModal(proxyData, 'PLACE_BET')

  const handleOpenPlaceBet = (event) => {
    event.stopPropagation()
    openModal()
  }

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
      <div>
        <BetDetailsBanner data={proxyData} />
        <TicketContainerWrapper>
          <BetsPlacedHeaderWrapper>
            <Typography type="p24" color="white">
              Bets Placed
            </Typography>
            <div className="button-section">
              <Button label="Place Bet" onClick={handleOpenPlaceBet} />
            </div>
          </BetsPlacedHeaderWrapper>
          <TicketListWrapper>
            {/*{tickets.map((ticket, index) => {
              return (
                <div key={ticket}>
                  <TicketCard />
                  {tickets.length - 1 === index ? null : <DividerWrapper />}
                </div>
              )
            })}*/}
          </TicketListWrapper>
        </TicketContainerWrapper>
      </div>
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
