import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { colors } from 'src/utils/colors'
import { styled } from '@mui/material/styles'

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: `${colors.lightGrey}`, // Change label color when focused
  },
  '& label': {
    color: `${colors.dullGrey}`, // Change label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${colors.dullGrey}`, // Change border color
    },
    '&:hover fieldset': {
      borderColor: `${colors.lightGrey}`, // Change border color on hover
    },
    '& input': {
      color: `${colors.white}`, // Change color of input value
    },
  },
})

const TextFieldCustom = ({ required, label, ...props }) => {
  return <CustomTextField required={required} label={label} {...props} />
}

export default TextFieldCustom
