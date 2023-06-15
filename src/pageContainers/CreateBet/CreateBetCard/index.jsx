import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardWrapper } from 'src/components/CardStyles'
import { CardInnerWrapper } from './styles'

const CreateBetCard = ({ gameName, description }) => {
  return (
    <CardWrapper>
      <CardInnerWrapper>
        <div>
          <Typography type="p34" color="white">
            {gameName}
          </Typography>

          <Typography type="p12" color="white">
            {description}
          </Typography>
        </div>

        <div className="button-section">
          <Button label="Create Bet" />
        </div>
      </CardInnerWrapper>
    </CardWrapper>
  )
}

export default CreateBetCard
