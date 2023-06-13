import { CardInnerWrapper } from './styles'
import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import DateBlock from './DateBlock'
import Button from 'src/components/Button'

const BetOpenCard = () => {
  const tags = ['my bet', 'participated']
  const betName = '#34 Bitcoin Prediction'
  return (
    <CardInnerWrapper>
      <div className="top-section">
        <div className="title-section">
          <Typography type="p20" color="white">
            {betName}
          </Typography>
          <Status color="green" />
        </div>

        <div className="tag-section">
          {tags.map((label) => {
            return <Tag theme="dark" label={label} key={label} />
          })}
        </div>
      </div>
      <div className="bottom-section">
        <DateBlock />
        <div className="button-section">
          <Button label="Place Bet" />
        </div>
      </div>
    </CardInnerWrapper>
  )
}

export default BetOpenCard
