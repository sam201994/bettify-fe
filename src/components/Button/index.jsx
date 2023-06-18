import Typography from 'src/components/Typography'
import { ButtonWrapper } from './styles'

const Button = ({ disabled = false, loader = false, label, onClick }) => {
  if (loader || disabled) {
    return (
      <ButtonWrapper disabled={disabled || loader}>
        <Typography
          type="p14"
          color="white"
          customStyles={{ justifyContent: 'center' }}
        >
          {loader ? `Loding ...` : label}
        </Typography>
      </ButtonWrapper>
    )
  }
  return (
    <ButtonWrapper onClick={onClick}>
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

export default Button
