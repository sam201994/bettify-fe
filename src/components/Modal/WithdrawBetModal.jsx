import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { WithdrawBetWrapper } from './styles'

const WithdrawBetModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={`Withdraw bet ${'\u00A0'.repeat(2)}  #23`}
    >
      <WithdrawBetWrapper>
        <div className="top-section">
          <Typography type="p14" color="lightGrey">
            Guess Bet: $23423.23423
          </Typography>
          <Typography type="p14" color="lightGrey">
            Staked amount: $1 ETH
          </Typography>
        </div>
        <div className="footer-section">
          <Button label="Withdraw Bet" />
        </div>
      </WithdrawBetWrapper>
    </CustomModal>
  )
}

export default WithdrawBetModal
