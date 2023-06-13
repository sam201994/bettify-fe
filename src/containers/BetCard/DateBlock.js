import { DateWrapper } from './styles'
import Typography from 'src/components/Typography'
import NameAddress from 'src/components/NameAddress'
import { commifyNumber } from 'src/utils/web3Utils'

const DateBlock = ({ number = '52342342342341235413' }) => {
  const winner = 'ola'
  return (
    <DateWrapper>
      <div className="date-section">
        <Typography type="p14" color="white">
          {number === 0
            ? `0 bet placed`
            : `${commifyNumber(number)} bets placed`}
        </Typography>
        <Typography type="p12" color="lightGrey">
          12th Sep, 2012 - 12th Sep, 2012
        </Typography>
        <Typography type="p12" color="lightGrey">
          20th Sep, 2012 - 12th Sep, 2012
        </Typography>
      </div>
      <div className="winner-section">
        {winner && (
          <>
            <Typography type="p14" color="white">
              Winner
            </Typography>
            <NameAddress imgSize={14} textSize={'p12'} />
          </>
        )}
      </div>
    </DateWrapper>
  )
}

export default DateBlock
