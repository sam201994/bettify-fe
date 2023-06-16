import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardInnerWrapper, StatsCardWrapper } from './styles'

const StatsCard = ({ title, number,  }) => {
  return (
    <StatsCardWrapper >
      <CardInnerWrapper>
         <Typography type="p24" color="white">
            {title}
          </Typography>

          <Typography type="p20" color="lightGrey">
            {number}
          </Typography>
      </CardInnerWrapper>
    </StatsCardWrapper>
  )
}

export default StatsCard
