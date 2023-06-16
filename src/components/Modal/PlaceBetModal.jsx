import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { InputWrapper, TextInput } from './styles'

const PlaceBetModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={'Place bet'}
      Footer={<Button label="Place Bet" />}
      Body={
        <InputWrapper>
          <div className="left-section">
            <TextInput placeholder="guess here.." />
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
      }
    />
  )
}

export default PlaceBetModal
