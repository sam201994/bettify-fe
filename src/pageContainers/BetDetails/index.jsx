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
import useBetDetails from './useBetDetails'

export default function BetDetails({ proxyAddress }) {
  const { loading, proxyData, betsLoading, allBets } =
    useBetDetails(proxyAddress)

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
            {allBets?.map((bet, index) => {
              return (
                <div key={bet.tokenId}>
                  <TicketCard data={bet} stakeAmount={proxyData.stakeAmount} />
                  {allBets.length - 1 === index ? null : <DividerWrapper />}
                </div>
              )
            })}
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
