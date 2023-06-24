import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import Typography from 'src/components/Typography'
import { formatWeiToDecimal } from 'src/utils/web3Utils'
import { colors } from 'src/utils/colors'

const InputWrapper = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.dullGrey};

  justify-content: space-between;
  .left-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
  }
  .right-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const TextInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  border: 0;
  color: white;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    color: ${colors.dullGrey};
  }

  &:focus {
    outline: none;
  }
`

const GuessInput = ({
  walletEthBalance,
  betData,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputWrapper>
      <div className="left-section">
        <TextInput value={value} onChange={onChange} {...props} />
        <Typography type="p14" color="lightGrey">
          {`${formatWeiToDecimal(betData.stakeAmount)} ETH`}
        </Typography>
      </div>
      <div className="right-section">
        <Image
          src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <Typography type="p14" color="lightGrey">
          {`${
            walletEthBalance ? (+walletEthBalance).toFixed(6) : 'loading...'
          } ETH`}
        </Typography>
      </div>
    </InputWrapper>
  )
}
export default GuessInput
