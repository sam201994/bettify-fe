import React from 'react'
import Dialog from '@mui/material/Dialog'

import Typography from 'src/components/Typography'
import { DialogWrapper } from './styles'

const CustomModal = ({ showModal, setShowModal, title, children }) => {
  return (
    <Dialog
      onClose={(event) => {
        event.stopPropagation()
        setShowModal(false)
      }}
      open={showModal}
      PaperProps={{
        style: { background: 'none' },
      }}
    >
      <DialogWrapper>
        <div className="dialog-title">
          <Typography
            type="p24"
            color="white"
            customStyles={{ marginBottom: '15px' }}
          >
            {title}
          </Typography>
        </div>
        <div className="dialog-body">{children}</div>
      </DialogWrapper>
    </Dialog>
  )
}

export default CustomModal
