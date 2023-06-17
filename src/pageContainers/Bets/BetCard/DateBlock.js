import Typography from 'src/components/Typography'
import NameAddress from 'src/components/NameAddress'
import { commifyNumber } from 'src/utils/web3Utils'
import { DateWrapper } from './styles'
import { getBetDateData } from 'src/utils/web3Utils'

const DateBlock = ({ data, status }) => {
  const { label, date } = getBetDateData(data, status)

  return (
    <DateWrapper>
      <div className="date-section">
        <Typography type="p12" color="lightGrey">
          {label}
        </Typography>
        <Typography type="p12" color="lightGrey">
          {date}
        </Typography>
      </div>
    </DateWrapper>
  )
}

export default DateBlock
