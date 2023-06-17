import { useContract } from 'src/hooks'
import Implementation from 'src/abis/Implementation.json'
import { getTicketIdFromPlaceBetReceipt } from 'src/utils/web3Utils'

const useGame = (proxyAddress) => {
  const [ProxyContract] = useContract(proxyAddress, Implementation.abi)

  const placeBet = async (bet, betAmount) => {
    const tx = await ProxyContract.placeBet(bet, {
      value: betAmount.toString(),
    })
    const receipt = await tx.wait()
    const tokenId = getTicketIdFromPlaceBetReceipt(receipt)
    return tokenId
  }

  const withdrawFunds = async (ticketId) => {
    const tx = await ProxyContract.withdrawFunds(ticketId)
    const receipt = await tx.wait()
    return receipt
  }

  const findWinner = async () => {
    const tx = await ProxyContract.findWinner()
    const receipt = await tx.wait()
    // TODO: find the winner from the logs of the transaction receipt and return the winner ticket, the winning amount and the bet
    return receipt
  }

  const mockFindWinner = async () => {
    const [winnerTicket, winningAmount] =
      await ProxyContract.callStatic.findWinner()

    return {
      winnerTicket: winnerTicket.toString(),
      winningAmount: winningAmount.toString(),
    }
  }

  const getWinner = async () => {
    const winnerTicket = await ProxyContract.winnerTicket()
    const bet = await ProxyContract.bets(winnerTicket)

    return {
      winnerTicket: winnerTicket.toString(),
      bet: bet.toString(),
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
