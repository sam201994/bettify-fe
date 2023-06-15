import { HeaderContrainer } from './styles'
import Typography from 'src/components/Typography'

export default function Header({ betName }) {
  return (
    <HeaderContrainer>
      <Typography type="p24" color="white">
        {betName}
      </Typography>
    </HeaderContrainer>
  )
}
