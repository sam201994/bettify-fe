import {
  getBetStatus,
  formatWeiToDecimal,
  getBetDateData,
} from 'src/utils/web3Utils'

import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardWrapper, CardInnerWrapper } from './styles'
import { useModal } from 'src/hooks'
import NameAddress from 'src/components/NameAddress'
import { BaseContext } from 'src/context/BaseContext'
import { getAddress } from 'ethers/lib/utils'

import { useContext } from 'react'

const BetCard = ({ data }) => {
  const { account } = useContext(BaseContext)

  const { startTime, bettingPeriodEndsAt, lockInPeriodEndsAt } = data
  const { status, color } = getBetStatus({
    startTime,
    bettingPeriodEndsAt,
    lockInPeriodEndsAt,
  })

  const { dateLabel, date } = getBetDateData(data, status)
  // console.log(data, account)
  const tags =
    getAddress(account) === getAddress(data.ownerAddress) ? ['my bet'] : []

  return (
    <CardWrapper>
      <CardInnerWrapper>
        <div className="top-section">
          <div className="title-section">
            <div>
              <Typography type="p12" color="lightGrey">
                {data.factoryName}
              </Typography>
              <NameAddress
                address={data.proxyAddress}
                imgSize={20}
                textSize={'p20'}
              />
            </div>

            <Status color={color} />
          </div>

          <div className="tag-section">
            {tags.map((label) => {
              return <Tag theme="dark" label={label} key={label} />
            })}
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-section">
            <Typography type="p14" color="white">
              {`Stake amount: ${formatWeiToDecimal(data.stakeAmount)} ETH`}
            </Typography>

            <div className="date-section">
              <Typography type="p12" color="lightGrey">
                {dateLabel}
              </Typography>
              <Typography type="p12" color="lightGrey">
                {date}
              </Typography>
            </div>
          </div>

          <div className="right-section">
            <div className="owner-section">
              <Typography type="p14" color="white">
                Owner
              </Typography>
              <NameAddress
                imgSize={14}
                textSize={'p12'}
                address={data.ownerAddress}
              />
            </div>
          </div>
        </div>
      </CardInnerWrapper>
    </CardWrapper>
  )
}

export default BetCard
