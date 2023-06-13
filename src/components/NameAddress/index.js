import { minifyAddress } from 'src/utils/web3Utils'
import { NameAddressWrapper, Gola } from './styles'
import Typography from '../Typography'

export default function NameAddress({
  imgSize,
  textSize,
  address = '0xa234bF5AcC3B150907704ce26D855A5638dEF890',
}) {
  return (
    <NameAddressWrapper>
      <Gola color="lightGrey" imgSize={imgSize} />
      <Typography type={textSize} color="white">
        {minifyAddress(address)}
      </Typography>
    </NameAddressWrapper>
  )
}
