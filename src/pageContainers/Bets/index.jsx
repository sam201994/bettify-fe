import { useRouter } from 'next/router'

import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from 'src/components/CardStyles'
import BetCard from './BetCard'
import Header from './Header'
import Fallback from 'src/components/Fallback'

const bets = [
  {
    id: 1,
    isBetOpen: true,
  },
  {
    id: 2,
    isBetLocked: true,
  },
  {
    id: 3,
  },
  {
    id: 4,
    isBetOpen: true,
  },
  {
    id: 5,
    isBetLocked: true,
  },
  {
    id: 6,
  },
  {
    id: 7,
    isBetOpen: true,
  },
  {
    id: 8,
    isBetLocked: true,
  },
]

export default function Bets() {
  const router = useRouter()

  const handleOnClickBet = (bet) => {
    router.push(`/bets/${bet.id}`)
  }

  return (
    <PageContainer id="ola1">
      <Header />
      <Fallback>
        <div>
          <CardListWrapper id="ola2">
            {bets.map((bet) => {
              return (
                <BetCard data={bet} key={bet.id} onClick={handleOnClickBet} />
              )
            })}
          </CardListWrapper>
        </div>
      </Fallback>
    </PageContainer>
  )
}
