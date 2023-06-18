import Typography from 'src/components/Typography'
import { PlaceholderWrapper } from './styles'

const Placeholder = ({ label1, label2 }) => {
  return (
    <PlaceholderWrapper>
      <Typography type="p24" color="darkGrey">
        {label1}
      </Typography>
      {label2 && (
        <Typography type="p16" color="darkGrey">
          {label2}
        </Typography>
      )}
    </PlaceholderWrapper>
  )
}

export default Placeholder
