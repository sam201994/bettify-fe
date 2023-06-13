import TagWrapper from './styles'
import Typography from '../Typography'

export default function Tag({ label, theme }) {
  return (
    <TagWrapper color={theme === 'light' ? '#363434' : '#1D1D1D'}>
      <Typography type="p12" color="white">
        {label}
      </Typography>
    </TagWrapper>
  )
}
