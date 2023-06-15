import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import DateBlock from './DateBlock'
import { BannerInnerWrapper } from './styles'

const BetClosedBanner = () => {
  const tags = ['my bet', 'participated']
  return (
    <BannerInnerWrapper>
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
      </div>
    </BannerInnerWrapper>
  )
}

export default BetClosedBanner
