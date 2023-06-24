import React from 'react'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { DeclareWinnerWrapper } from './styles'

const DeclareWinnerModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={`Declare winner ${'\u00A0'.repeat(2)}   #23`}
    >
      <DeclareWinnerWrapper>
        <div className="top-section">
          <Typography type="p14" color="lightGrey">
            Guess Bet: $23423.23423
          </Typography>
          <Typography type="p14" color="lightGrey">
            Staked amount: $1 ETH
          </Typography>
        </div>
        <div className="footer-section">
          <Button label="Declare Winner" />
        </div>
      </DeclareWinnerWrapper>
    </CustomModal>
  )
}

export default DeclareWinnerModal
