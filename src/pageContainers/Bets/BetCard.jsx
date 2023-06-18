// import BetOpenCard from './BetOpenCard'
// import BetLockedCard from './BetLockedCard'
// import BetClosedCard from './BetClosedCard'

// import { CardWrapper } from 'src/components/CardStyles'
import {
  getBetStatus,
  formatWeiToDecimal,
  getBetDateData,
} from 'src/utils/web3Utils'

import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardWrapper, CardInnerWrapper, DateWrapper } from './styles'
import { useModal } from 'src/hooks'
import NameAddress from 'src/components/NameAddress'

const BetCard = ({ data, onClick }) => {
  const { startTime, bettingPeriodEndsAt, lockInPeriodEndsAt } = data
  const { status, color } = getBetStatus({
    startTime,
    bettingPeriodEndsAt,
    lockInPeriodEndsAt,
  })
  const { dateLabel, date } = getBetDateData(data, status)

  const tags = []

  return (
    <CardWrapper>
      <CardInnerWrapper>
        <div className="top-section">
          <div className="title-section">
            <NameAddress
              address={data.proxyAddress}
              imgSize={20}
              textSize={'p20'}
            />

            <Status color={color} />
          </div>
          <Typography type="p12" color="lightGrey">
            {data.factoryName}
          </Typography>
          <div className="tag-section">
            {tags.map((label) => {
              return <Tag theme="dark" label={label} key={label} />
            })}
          </div>
        </div>
        <div className="bottom-section">
          <Typography type="p14" color="white">
            {`Stake amount: ${formatWeiToDecimal(data.stakeAmount)} ETH`}
          </Typography>

          <DateWrapper>
            <div className="date-section">
              <Typography type="p12" color="lightGrey">
                {dateLabel}
              </Typography>
              <Typography type="p12" color="lightGrey">
                {date}
              </Typography>
            </div>
          </DateWrapper>
        </div>
      </CardInnerWrapper>
    </CardWrapper>
  )
}

export default BetCard

{
  /*   <div className="winner-section">
        {winner && (
          <>
            <Typography type="p14" color="white">
              Winner
            </Typography>
            <NameAddress imgSize={14} textSize={'p12'} />
          </>
        )}
      </div>*/
}

{
  /*<div className="button-section">
            <Button label="Place Bet" onClick={() => {}} />
          </div>*/
}
