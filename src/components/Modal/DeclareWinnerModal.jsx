import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { WithdrawBetBodyWrapper } from './styles'

const DeclareWinnerModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={`Declare winner ${'\u00A0'.repeat(2)}   #23`}
      Footer={<Button label="Declare Winner" />}
      Body={
        <WithdrawBetBodyWrapper>
          <Typography type="p14" color="lightGrey">
            Guess Bet: $23423.23423
          </Typography>
          <Typography type="p14" color="lightGrey">
            Staked amount: $1 ETH
          </Typography>
        </WithdrawBetBodyWrapper>
      }
    />
  )
}

export default DeclareWinnerModal
