import { useRouter } from 'next/router'
import { BaseContext } from 'src/context/BaseContext'
import { useContext } from 'react'
import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from 'src/components/CardStyles'
import BetCard from './BetCard'
import Header from './Header'
import Fallback from 'src/components/Fallback'

export default function Bets() {
  const router = useRouter()
  const { allBets, betsLoading } = useContext(BaseContext)
  console.log({ allBets, betsLoading })

  const handleOnClickBet = (bet) => {
    router.push(`/bets/${bet.id}`)
  }

  if (!allBets) return null

  return (
    <PageContainer id="ola1">
      <Header />
      <Fallback>
        <div>
          <CardListWrapper id="ola2">
            {allBets.map((bet) => {
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
