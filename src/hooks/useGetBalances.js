import { useContext } from 'react'
import { ethers } from 'ethers'
import ERC20Artifact from 'src/abis/ERC20.json'
import { BaseContext } from 'src/context/BaseContext'

const useGetBalances = () => {
  const { provider } = useContext(BaseContext)

  async function fetchEthBalance(walletAddress) {
    try {
      const balanceInWei = await provider.getBalance(walletAddress)
      const balanceInEth = ethers.utils.formatEther(balanceInWei)

      return { balanceInWei, balanceInEth }
    } catch (error) {
      console.error('Error fetching ETH balance:', error)
    }
  }

  async function fetchERC20TokenBalance(walletAddress, tokenAddress) {
    try {
      const contract = new ethers.Contract(
        tokenAddress,
        ERC20Artifact.abi,
        provider,
      )
      const balanceInWei = await contract.getBalance(walletAddress)
      const balanceInEth = ethers.utils.formatEther(balanceInWei)
      return { balanceInWei, balanceInEth }
    } catch (error) {
      console.error('Error fetching Token balance:', error)
    }
  }

  return { fetchEthBalance, fetchERC20TokenBalance }
}

export default useGetBalances
