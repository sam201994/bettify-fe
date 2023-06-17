import { useState } from 'react'
import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from 'src/components/CardStyles'
import CreateBetCard from './CreateBetCard'
import Header from './Header'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'
import Fallback from 'src/components/Fallback'

export default function CreateBet() {
  return (
    <PageContainer>
      <Header />
      <Fallback>
        <div>
          <CardListWrapper>
            {Object.values(FACTORY_CONTRACTS).map((fc) => {
              return <CreateBetCard data={fc} key={fc.type} />
            })}
          </CardListWrapper>
        </div>
      </Fallback>
    </PageContainer>
  )
}
