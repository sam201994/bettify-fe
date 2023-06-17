import React, { useState } from 'react'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { GuessInput } from 'src/components/FormFields'
import { PlaceBetWrapper } from './styles'

const PlaceBetModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={'Place bet'}
    >
      <PlaceBetWrapper>
        <GuessInput value={'0.1'} onChange={() => {}} />
        <Button label="Place Bet" />
      </PlaceBetWrapper>
    </CustomModal>
  )
}

export default PlaceBetModal
