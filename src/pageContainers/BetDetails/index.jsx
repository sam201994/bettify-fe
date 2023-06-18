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

export default function Home({ proxyAddress }) {
  const isBetOpen = true
  const tickets = [1, 2, 3, 5, 6]

  const { Modal, openModal } = useModal({ proxyAddress }, 'PLACE_BET')

  const handleOpenPlaceBet = (event) => {
    event.stopPropagation()
    openModal()
  }

  const renderData = () => {
    if (false) return <Placeholder label1="loading bets..." />
    if (false)
      return (
        <Placeholder
          label1="No data"
          label2="Create bets to start staking and earn interest"
        />
      )
    return (
      <div>
        <BetDetailsBanner data={{}} isBetOpen={isBetOpen} />
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
            {tickets.map((ticket, index) => {
              return (
                <>
                  <TicketCard />
                  {tickets.length - 1 === index ? null : <DividerWrapper />}
                </>
              )
            })}
          </TicketListWrapper>
        </TicketContainerWrapper>
      </div>
    )
  }

  return (
    <PageContainer id="ola1">
      <Header betName={'Bitcoin Prediction #34'} />
      <Fallback>{renderData()}</Fallback>
      <Modal />
    </PageContainer>
  )
}
