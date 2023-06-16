import { useContract } from './useContract'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'

export const useFactoryContract = (type) => {
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
    return receipt
  }

  // TODO: write a function to get all the instances of the proxy contracts created by the factory contract using the event logs from the factory contract

  return {
    createBet,
  }
}
