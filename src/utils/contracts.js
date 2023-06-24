import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0xdb6D87299ECf39Ffa8AD6710df645c69587C51f4'

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

export const ALL_FACTORY_CONTRACTS = [BitcoinPriceBetFactoryContractAddress]
