import Typography from 'src/components/Typography'
import { HeaderContrainer } from './styles'

export default function Header({ betName }) {
  return (
    <HeaderContrainer>
      <Typography type="p24" color="white">
        {betName}
      </Typography>
    </HeaderContrainer>
  )
}
