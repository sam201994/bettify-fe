import { useContext } from 'react'
import { useRouter } from 'next/router'

import { BaseContext } from 'src/context/BaseContext'
import { PageContainer } from 'src/appLayout/styles'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
import BetCard from './BetCard'
import Header from './Header'
import { CardListWrapper } from './styles'

export default function Bets() {
  const router = useRouter()
  const { allProxies, proxiesLoading } = useContext(BaseContext)

  const handleOnClickBet = (bet) => {
    router.push(`/bets/${bet.proxyAddress}`)
  }

  const renderData = () => {
    if (proxiesLoading) return <Placeholder label1="loading bets..." />
    if (!allProxies?.length)
      return (
        <Placeholder
          label1="No data"
          label2="Create bets to start staking and earn interest"
        />
      )
    return (
      <CardListWrapper id="ola2">
        {allProxies.map((bet) => {
          return (
            <div onClick={() => handleOnClickBet(bet)} key={bet.proxyAddress}>
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
