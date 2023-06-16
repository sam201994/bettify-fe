import BitcoinPredictionFactoryContract from 'src/abis/BitcoinPredictionFactoryContract.json'

const BitcoinPriceBetFactoryContractAddress =
  '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export const FACTORY_CONTRACTS = {
  BitcoinPriceBet: {
    address: BitcoinPriceBetFactoryContractAddress,
    abi: BitcoinPredictionFactoryContract.abi,
  },
}
