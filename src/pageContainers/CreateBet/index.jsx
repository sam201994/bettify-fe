import { PageContainer } from 'src/appLayout/styles'
import { CardListWrapper } from 'src/components/CardStyles'
import CreateBetCard from './CreateBetCard'
import Header from './Header'

export default function CreateBet() {
  return (
    <PageContainer id="ola1">
      <Header />

      <div>
        <CardListWrapper id="ola2">
          <CreateBetCard
            gameName="Bitcoin Prediction"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <CreateBetCard
            gameName="Bitcoin Prediction"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />

          <CreateBetCard
            gameName="Bitcoin Prediction"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />

          <CreateBetCard
            gameName="Bitcoin Prediction"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />

          <CreateBetCard
            gameName="Bitcoin Prediction"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </CardListWrapper>
      </div>
    </PageContainer>
  )
}
