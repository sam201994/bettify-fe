import { useContract } from 'src/hooks'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'
import { getProxyAddressFromReceipt } from 'src/utils/web3Utils'

const useFactoryContract = (type) => {
  const { address, abi } = FACTORY_CONTRACTS[type]
  const FactoryContract = useContract(address, abi)

  const createBet = async (
    bettingPeriodEndTimeStamp,
    lockInPeriodEndTimeStamp,
    stakeAmountInWei,
  ) => {
    const tx = await FactoryContract.createProxy(
      bettingPeriodEndTimeStamp,
      lockInPeriodEndTimeStamp,
      stakeAmountInWei,
    )
    const receipt = await tx.wait()
    return getProxyAddressFromReceipt(receipt)
  }

  return {
    createBet,
  }
}

export default useFactoryContract
