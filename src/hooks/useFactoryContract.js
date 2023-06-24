import { useContract } from 'src/hooks'
import { FACTORY_CONTRACTS, ALL_FACTORY_CONTRACTS } from 'src/utils/contracts'
import { getProxyAddressFromReceipt } from 'src/utils/web3Utils'
import { getEvents } from 'src/queries'

const useFactoryContract = (contractAddress) => {
  const { address, abi } = FACTORY_CONTRACTS[contractAddress]
  const [FactoryContract] = useContract(address, abi)

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

  const getAllEvents = async (eventName = 'ProxyCreated') => {
    const topic = FactoryContract.interface.getEventTopic(eventName)
    const events = await getEvents(ALL_FACTORY_CONTRACTS, [topic, topic])

    const decodedEvents = events.data.result.map((event) => {
      const decodedEvent = FactoryContract.interface.parseLog(event)
      return decodedEvent
    })

    return decodedEvents
  }

  return {
    address,
    createBet,
    getAllEvents,
  }
}

export default useFactoryContract
