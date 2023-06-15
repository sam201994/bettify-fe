import Typography from 'src/components/Typography'
import { ButtonWrapper, IconButtonWrapper } from './styles'

const Button = ({ disabled = false, loader = false, label, onClick }) => {
  if (loader) {
    return (
      <ButtonWrapper disabled={disabled} loader={loader}>
        <Typography type="p14" color="white">
          Loding ...
        </Typography>
      </ButtonWrapper>
    )
  }
  return (
    <ButtonWrapper
      disabled={disabled}
      loader={loader}
      onClick={disabled ? () => {} : onClick}
    >
      <Typography type="p14" color="white">
        {label}
      </Typography>
    </ButtonWrapper>
  )
}

export const IconButton = ({ children, onClick, loader = false }) => {
  if (loader) {
    return <IconButtonWrapper loader={loader}>{children}</IconButtonWrapper>
  }
  return (
    <IconButtonWrapper loader={loader} onClick={onClick}>
      {children}
    </IconButtonWrapper>
  )
}

export default Button
