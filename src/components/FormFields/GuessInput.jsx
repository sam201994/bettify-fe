import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import styled from 'styled-components'

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
  font-size: 24px;
  font-weight: 500;
  &::placeholder {
    color: ${colors.dullGrey};
  }

  &:focus {
    outline: none;
  }
`

const GuessInput = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <div className="left-section">
        <TextInput
          placeholder="guess here.."
          value={value}
          onChange={onChange}
        />
        <Typography type="p14" color="lightGrey">
          $1 ETH
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
          0.0453 ETH Balance
        </Typography>
      </div>
    </InputWrapper>
  )
}
export default GuessInput