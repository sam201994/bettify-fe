import { useContract } from 'src/hooks'
import { FACTORY_CONTRACTS } from 'src/utils/contracts'
import { getProxyAddressFromReceipt } from 'src/utils/web3Utils'
import { getEvents } from '../queries'

const BitcoinPriceBetFactoryContractAddress =
  '0x8218597E0a8407639c2a8d0A33C1328F6F2E1901'

const BitcoinPriceBetFactoryContractAddress1 =
  '0xCB785CCe8884DeE49293E1D45D6F86eE3B9E0941'

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
    const events = await getEvents(
      [
        BitcoinPriceBetFactoryContractAddress,
        BitcoinPriceBetFactoryContractAddress1,
      ],
      [topic, topic],
    )

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
