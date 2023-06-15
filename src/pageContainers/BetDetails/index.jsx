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

export default function Home() {
  const isBetOpen = true
  const tickets = [1, 2, 3, 5, 6]
  return (
    <PageContainer id="ola1">
      <Header betName={'Bitcoin Prediction #34'} />

      <div>
        <BetDetailsBanner data={{}} isBetOpen={isBetOpen} />
        <TicketContainerWrapper>
          <BetsPlacedHeaderWrapper>
            <Typography type="p24" color="white">
              Bets Placed
            </Typography>
            <div className="button-section">
              <Button label="Place Bet" />
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
    </PageContainer>
  )
}
