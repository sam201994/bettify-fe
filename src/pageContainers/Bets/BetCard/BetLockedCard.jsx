import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import DateBlock from './DateBlock'
import { CardInnerWrapper } from './styles'

const BetLockaedCard = () => {
  const tags = ['my bet', 'participated']
  return (
    <CardInnerWrapper>
      <div className="top-section">
        <div className="title-section">
          <Typography type="p20" color="white">
            34 Bitcoin Prediction#34 Bitcoin Prediction
          </Typography>
          <Status color="orange" />
        </div>

        <div className="tag-section">
          {tags.map((label) => {
            return <Tag theme="dark" label={label} key={label} />
          })}
        </div>
      </div>
      <div className="bottom-section">
        <div style={{ height: 40 }} />
        <DateBlock />
      </div>
    </CardInnerWrapper>
  )
}

export default BetLockaedCard
