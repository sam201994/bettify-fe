import { CardInnerWrapper } from './styles'
import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import DateBlock from './DateBlock'
import Button from 'src/components/Button'

const BetClosedCard = () => {
  const tags = ['my bet', 'participated']
  return (
    <CardInnerWrapper>
      <div className="top-section">
        <div className="title-section">
          <Typography type="p20" color="white" style={{ width: 250 }}>
            #34 Bitcoin Prediction
          </Typography>
          <Status color="red" />
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
          <Button label="Declare funds" />
          <Button label="Withdraw funds" />
        </div>
      </div>
    </CardInnerWrapper>
  )
}

export default BetClosedCard
