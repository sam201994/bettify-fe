import { minifyAddress } from 'src/utils/web3Utils'
import Typography from 'src/components/Typography'
import { NameAddressWrapper, Gola } from './styles'

export default function NameAddress({
  imgSize,
  textSize,
  address = '0xa234bF5AcC3B150907704ce26D855A5638dEF890',
}) {
  return (
    <NameAddressWrapper>
      <Gola color="lightGrey" width={imgSize} />
      <Typography type={textSize} color="white">
        {minifyAddress(address)}
      </Typography>
    </NameAddressWrapper>
  )
}
