const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

export const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
  {
    id: '0x5',
    token: 'gETH',
    label: 'Ethereum Goerli',
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  },
]

export const getRpcUrl = (network) => {
  if (network === '0x5') return `https://goerli.infura.io/v3/${INFURA_KEY}`
  if (network === '0x1') return `https://mainnet.infura.io/v3/${INFURA_KEY}`
  return `https://mainnet.infura.io/v3/${INFURA_KEY}`
}
