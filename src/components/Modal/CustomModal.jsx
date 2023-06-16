import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'

import Typography from 'src/components/Typography'
import { DialogWrapper } from './styles'

// input size -20
const CustomModal = ({ showModal, setShowModal, title, Footer, Body }) => {
  return (
    <Dialog
      onClose={() => setShowModal(false)}
      open={showModal}
      PaperProps={{
        style: { background: 'none' },
      }}
    >
      <DialogWrapper>
        <div className="top-section">
          <Typography
            type="p24"
            color="white"
            customStyles={{ marginBottom: '15px' }}
          >
            {title}
          </Typography>
          {Body}
        </div>
        <div className="bottom-section">{Footer}</div>
      </DialogWrapper>
    </Dialog>
  )
}

export default CustomModal
