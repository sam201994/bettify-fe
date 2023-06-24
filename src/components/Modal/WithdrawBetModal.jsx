import { formatEther } from 'ethers/lib/utils'
import { useState } from 'react'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { useGame } from 'src/hooks'
import CustomModal from './CustomModal'
import { WithdrawBetWrapper } from './styles'
import { useQueryClient } from 'react-query'

const WithdrawBetModal = ({ showModal, setShowModal, data }) => {
  const { stakeAmount, guess, tokenId, proxyAddress, isWinner } = data
  const queryClient = useQueryClient()

  const { withdrawFunds, findWinner } = useGame(proxyAddress)
  const [loading, setLoading] = useState(false)

  const handleWithdrawBet = async () => {
    setLoading(true)
    try {
      if (isWinner) {
        await findWinner()
      }
      await withdrawFunds(tokenId)
      queryClient.invalidateQueries('allWithdrawals')
      setShowModal(false)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={`Withdraw bet #${tokenId}`}
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
            loader={loading}
          />
        </div>
      </WithdrawBetWrapper>
    </CustomModal>
  )
}

export default WithdrawBetModal
