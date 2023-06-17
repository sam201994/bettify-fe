import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0x8218597E0a8407639c2a8d0A33C1328F6F2E1901'

const BitcoinPriceBetFactoryContractAddress1 =
  '0xCB785CCe8884DeE49293E1D45D6F86eE3B9E0941'

export const FACTORY_CONTRACTS = {
  [BitcoinPriceBetFactoryContractAddress]: {
    address: BitcoinPriceBetFactoryContractAddress,
    abi: BitcoinPredictionFactoryContract.abi,
    type: 'BitcoinPriceBet',
    name: 'Bitcoin Prediction',
    description:
      'Create bitcoin price guessing game. Enter the betting period, lockin period and let the game begin!',
  },
  [BitcoinPriceBetFactoryContractAddress1]: {
    address: BitcoinPriceBetFactoryContractAddress1,
    abi: BitcoinPredictionFactoryContract.abi,
    type: 'BitcoinPriceBet1',
    name: 'Bitcoin Prediction 1',
    description: `Hello world`,
  },
}
