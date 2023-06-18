import { useRouter } from 'next/router'
import { BaseContext } from 'src/context/BaseContext'
import { useContext } from 'react'
import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from './styles'
import BetCard from './BetCard'
import Header from './Header'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
export default function Bets() {
  const router = useRouter()
  const { allBets, betsLoading } = useContext(BaseContext)
  console.log({ allBets, betsLoading })

  const handleOnClickBet = (bet) => {
    router.push(`/bets/${bet.proxyAddress}`)
  }

  const renderData = () => {
    if (betsLoading) return <Placeholder label1="loading bets..." />
    if (!allBets?.length)
      return (
        <Placeholder
          label1="No data"
          label2="Create bets to start staking and earn interest"
        />
      )
    return (
      <CardListWrapper id="ola2">
        {allBets.map((bet) => {
          return (
            <div onClick={() => handleOnClickBet(bet)} key={bet.id}>
              <BetCard data={bet} />
            </div>
          )
        })}
      </CardListWrapper>
    )
  }

  return (
    <PageContainer>
      <Header />
      <Fallback>{renderData()}</Fallback>
    </PageContainer>
  )
}
