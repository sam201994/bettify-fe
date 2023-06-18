import { minifyAddress } from 'src/utils/web3Utils'
import Typography from 'src/components/Typography'
import { NameAddressWrapper, Gola } from './styles'

export default function NameAddress({
  imgSize,
  textSize,
  address = '0xa234bF5AcC3B150907704ce26D855A5638dEF890',
}) {
  return (
    <NameAddressWrapper
      onClick={(event) => {
        event.stopPropagation()
        window.open(`https://goerli.etherscan.io/address/${address}`)
      }}
    >
      <Gola color="lightGrey" width={imgSize} />
      <Typography type={textSize} color="lightGrey">
        {minifyAddress(address)}
      </Typography>
    </NameAddressWrapper>
  )
}
