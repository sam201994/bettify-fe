import Typography from 'src/components/Typography'
import TagWrapper from './styles'

export default function Tag({ label, theme }) {
  return (
    <TagWrapper color={theme === 'light' ? '#363434' : '#1D1D1D'}>
      <Typography type="p12" color="white">
        {label}
      </Typography>
    </TagWrapper>
  )
}
