import { useState } from 'react'
import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from './styles'
import CreateBetCard from './CreateBetCard'
import Header from './Header'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'
import Fallback from 'src/components/Fallback'

export default function CreateBet() {
  const k = Object.values(FACTORY_CONTRACTS)
  const l = [...k, ...k, ...k]
  return (
    <PageContainer>
      <Header />
      <Fallback>
        <CardListWrapper>
          {l.map((fc) => {
            return <CreateBetCard data={fc} key={fc.type} />
          })}
        </CardListWrapper>
      </Fallback>
    </PageContainer>
  )
}
