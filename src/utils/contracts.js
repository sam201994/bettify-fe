import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0xE57DD363198357350BFe3D6c734C72Ef9521eEa5'

export const FACTORY_CONTRACTS = {
  [BitcoinPriceBetFactoryContractAddress]: {
    address: BitcoinPriceBetFactoryContractAddress,
    abi: BitcoinPredictionFactoryContract.abi,
    type: 'BitcoinPriceBet',
    name: 'Bitcoin Prediction',
    description:
      'Create bitcoin price guessing game. Enter the betting period, lockin period and let the game begin!',
  },
}
