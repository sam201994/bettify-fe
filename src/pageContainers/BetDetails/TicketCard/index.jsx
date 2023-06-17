import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { TicketCardWrapper } from './styles'
import { useModal } from 'src/hooks'

const TicketCard = ({ data }) => {
  const { Modal, openModal } = useModal({ address: 12 }, 'WITHDRAW_BET')

  const handleOpenWithdrawBet = (event) => {
    event.stopPropagation()
    openModal()
  }
  return (
    <>
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
          <Button label="Withdraw bet" onClick={handleOpenWithdrawBet} />
        </div>
      </TicketCardWrapper>
      <Modal />
    </>
  )
}

export default TicketCard
