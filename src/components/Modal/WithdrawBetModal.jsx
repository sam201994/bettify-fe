import { formatEther } from 'ethers/lib/utils'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { useGame } from 'src/hooks'
import CustomModal from './CustomModal'
import { WithdrawBetWrapper } from './styles'

const WithdrawBetModal = ({ showModal, setShowModal, data }) => {
  const { stakeAmount, guess, tokenId, proxyAddress, isWinner } = data

  const { withdrawFunds, findWinner } = useGame(proxyAddress)

  const handleWithdrawBet = async () => {
    try {
      if (isWinner) {
        await findWinner()
      }
      await withdrawFunds(tokenId)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={`Withdraw bet ${'\u00A0'.repeat(2)}  #23`}
    >
      <WithdrawBetWrapper>
        <div className="top-section">
          <Typography type="p14" color="lightGrey">
            Guess Bet: ${guess}
          </Typography>
          <Typography type="p14" color="lightGrey">
            Staked amount: ${formatEther(stakeAmount)} ETH
          </Typography>
        </div>
        <div className="footer-section">
          <Button
            label={isWinner ? 'Claim winnings' : 'Withdraw bet'}
            onClick={handleWithdrawBet}
          />
        </div>
      </WithdrawBetWrapper>
    </CustomModal>
  )
}

export default WithdrawBetModal
