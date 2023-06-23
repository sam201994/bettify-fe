import { useContract } from 'src/hooks'
import Implementation from 'src/abis/Implementation.json'
import { getTicketIdFromPlaceBetReceipt } from 'src/utils/web3Utils'

const useGame = (proxyAddress) => {
  const [ProxyContract] = useContract(proxyAddress, Implementation.abi)

  const placeBet = async (bet, betAmount) => {
    const estimatedGas = await ProxyContract.estimateGas.placeBet(bet, {
      value: betAmount.toString(),
    })
    const gasLimit = estimatedGas.mul(2)
    const tx = await ProxyContract.placeBet(bet, {
      value: betAmount.toString(),
      gasLimit,
    })
    const receipt = await tx.wait()
    const tokenId = getTicketIdFromPlaceBetReceipt(receipt)
    return tokenId
  }

  const withdrawFunds = async (ticketId) => {
    const estimatedGas = await ProxyContract.estimateGas.withdrawFunds(
      +ticketId,
    )
    const gasLimit = estimatedGas.mul(2)
    const tx = await ProxyContract.withdrawFunds(+ticketId, {
      gasLimit,
    })
    const receipt = await tx.wait()
    return receipt
  }

  const findWinner = async () => {
    const tx = await ProxyContract.findWinner()
    const receipt = await tx.wait()
    return receipt
  }

  const mockFindWinner = async () => {
    if (!ProxyContract) return
    const [winnerTicket, winningAmount] =
      await ProxyContract.callStatic.findWinner()

    return {
      winnerTicket: winnerTicket.toString(),
      winningAmount: winningAmount.toString(),
    }
  }

  const getWinner = async () => {
    if (!ProxyContract) return
    const winnerTicket = await ProxyContract.winnerTicket()
    return {
      winnerTicket: winnerTicket.toString(),
    }
  }

  return {
    placeBet,
    withdrawFunds,
    findWinner,
    getWinner,
    mockFindWinner,
  }
}

export default useGame
