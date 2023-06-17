import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import Typography from 'src/components/Typography'
import { FallbackWrapper, ButtonWrapper } from './styles'

const Fallback = ({ children }) => {
  const { handleChangeChain, chainNotSupported, wallet, account, connect } =
    useContext(BaseContext)

  if (!account)
    return (
      <FallbackWrapper>
        <Typography type="p24" color="darkGrey">
          Connect wallet to display data
        </Typography>
        <ButtonWrapper onClick={connect}>
          <Typography type="p16" color="black">
            Connect wallet
          </Typography>
        </ButtonWrapper>
      </FallbackWrapper>
    )
  if (chainNotSupported)
    return (
      <FallbackWrapper>
        <Typography type="p24" color="darkGrey">
          We ony Support Goerli network
        </Typography>
        <ButtonWrapper onClick={handleChangeChain}>
          <Typography type="p16" color="black">
            Switch network
          </Typography>
        </ButtonWrapper>
      </FallbackWrapper>
    )

  return children
}

export default Fallback
