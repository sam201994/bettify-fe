import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0x8218597E0a8407639c2a8d0A33C1328F6F2E1901'

export const FACTORY_CONTRACTS = {
  BitcoinPriceBet: {
    address: BitcoinPriceBetFactoryContractAddress,
    abi: BitcoinPredictionFactoryContract.abi,
    type: 'BitcoinPriceBet',
    name: 'Bitcoin Prediction',
    description:
      'Create bitcoin price guessing game. Enter the betting period, lockin period and let the game begin!',
  },
}
