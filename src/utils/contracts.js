import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0x9D1297D59D3764A667BFf0DfBB442aD5E19D7d66'

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
