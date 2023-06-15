import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { TicketCardWrapper } from './styles'

const TicketCard = () => {
  return (
    <TicketCardWrapper>
      <div className="left-section">
        <Typography type="p20" color="white">
          Ticket #32
        </Typography>

        <Typography type="p16" color="lightGrey">
          100 ETH
        </Typography>
      </div>

      <div className="right-section">
        <Button label="Withdraw bet" />
      </div>
    </TicketCardWrapper>
  )
}

export default TicketCard
