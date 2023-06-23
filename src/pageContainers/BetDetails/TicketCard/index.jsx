import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { TicketCardWrapper } from './styles'
import { useModal } from 'src/hooks'
import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { getAddress } from 'ethers/lib/utils'

const TicketCard = ({
  data,
  stakeAmount,
  isWinner,
  isWithdrawn,
  withdrawalsLoading,
}) => {
  const { Modal, openModal } = useModal(
    { ...data, stakeAmount, isWinner },
    'WITHDRAW_BET',
  )
  const { account } = useContext(BaseContext)

  const handleOpenWithdrawBet = (event) => {
    event.stopPropagation()
    openModal()
  }
  return (
    <>
      <TicketCardWrapper>
        <div className="left-section">
          <Typography type="p20" color="white">
            Ticket #{data.tokenId}
          </Typography>

          <Typography type="p16" color="lightGrey">
            Guess Value: {data.guess}
          </Typography>
        </div>

        <div className="right-section">
          {getAddress(account) == getAddress(data.userAddress) &&
            !withdrawalsLoading &&
            !isWithdrawn && (
              <Button
                label={!isWinner ? 'Withdraw bet' : 'Claim winnings'}
                onClick={handleOpenWithdrawBet}
              />
            )}
          {isWithdrawn && !withdrawalsLoading && (
            <Typography
              type="p16"
              color="lightGrey"
              customStyles={{ fontStyle: 'italic' }}
            >
              Withdrawn
            </Typography>
          )}
        </div>
      </TicketCardWrapper>
      <Modal />
    </>
  )
}

export default TicketCard
