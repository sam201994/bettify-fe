import Typography from 'src/components/Typography'
import { ButtonWrapper, IconButtonWrapper } from './styles'

const Button = ({ disabled = false, loader = false, label, onClick }) => {
  if (loader) {
    return (
      <ButtonWrapper disabled={disabled || loader}>
        <Typography
          type="p14"
          color="white"
          customStyles={{ justifyContent: 'center' }}
        >
          Loding ...
        </Typography>
      </ButtonWrapper>
    )
  }
  return (
    <ButtonWrapper
      disabled={disabled || loader}
      onClick={disabled ? () => {} : onClick}
    >
      <Typography
        type="p14"
        color="white"
        customStyles={{ justifyContent: 'center' }}
      >
        {label}
      </Typography>
    </ButtonWrapper>
  )
}

export const IconButton = ({ children, onClick, loader = false }) => {
  if (loader) {
    return (
      <IconButtonWrapper disabled={disabled || loader}>
        {children}
      </IconButtonWrapper>
    )
  }
  return (
    <IconButtonWrapper disabled={disabled || loader} onClick={onClick}>
      {children}
    </IconButtonWrapper>
  )
}

export default Button
