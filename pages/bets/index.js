import Bets from 'src/pageContainers/Bets'
const { ethers, utils } = require('ethers')

export async function getAllProxyContracts() {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://eth-goerli.g.alchemy.com/v2/7KtCu2ltd_kySqJCYeb7KwfdUYl3yHWg',
  )
  console.log('pro')
  const filter = {
    address: utils.getAddress('0x8218597E0a8407639c2a8d0A33C1328F6F2E1901'),
    topics: [ethers.utils.id('ProxyCreated')],
    // Additional filter criteria (if required)
  }

  const logs = await provider.getLogs(filter)
  console.log('logs', logs)
  // Process the logs
  logs.forEach((log) => {
    // Access log properties and perform desired operations
    console.log(log)
  })
}

export default function BetsPage() {
  getAllProxyContracts()
  return (
    <>
      <Bets />
    </>
  )
}
