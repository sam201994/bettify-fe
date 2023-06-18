import { PageContainer } from 'src/appLayout/styles'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'
import Fallback from 'src/components/Fallback'
import CreateBetCard from './CreateBetCard'
import Header from './Header'
import { CardListWrapper } from './styles'

export default function CreateBet() {
  return (
    <PageContainer>
      <Header />
      <Fallback>
        <CardListWrapper>
          {Object.values(FACTORY_CONTRACTS).map((fc) => {
            return <CreateBetCard data={fc} key={fc.type} />
          })}
        </CardListWrapper>
      </Fallback>
    </PageContainer>
  )
}
