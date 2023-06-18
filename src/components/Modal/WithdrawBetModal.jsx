import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { useGame } from 'src/hooks'
import CustomModal from './CustomModal'
import { WithdrawBetWrapper } from './styles'
import { formatEther } from 'ethers/lib/utils'

const WithdrawBetModal = ({ showModal, setShowModal, data }) => {
  const { stakeAmount, guess, tokenId, proxyAddress } = data

  const { withdrawFunds } = useGame(proxyAddress)

  const handleWithdrawBet = async () => {
    try {
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
          <Button label="Withdraw Bet" onClick={handleWithdrawBet} />
        </div>
      </WithdrawBetWrapper>
    </CustomModal>
  )
}

export default WithdrawBetModal
