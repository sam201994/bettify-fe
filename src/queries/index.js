import axios from 'axios'
import { useQuery } from 'react-query'
import { FACTORY_CONTRACTS } from '../utils/contracts'
import { ethers } from 'ethers'
import { parseProxyCreatedEvent } from '../utils/web3Utils'
import { getAddress } from 'ethers/lib/utils'
import ImplementationContract from '../abis/Implementation.json'

export const useGetTokenUSDPrices = (coinGeckoIds) => {
  return useQuery(coinGeckoIds, async () => {
    const config = {
      headers: {
        accept: 'application/json',
      },
      params: { ids: coinGeckoIds.join(','), vs_currencies: 'usd' },
    }
    return await axios.get(
      'https://api.coingecko.com/api/v3/simple/price',
      config,
    )
  })
}

export const useGetAllProxies = () => {
  return useQuery(
    'allProxies',
    async () => {
      const addresses = Object.keys(FACTORY_CONTRACTS)
      const contractInterface = new ethers.utils.Interface(
        FACTORY_CONTRACTS[addresses[0]].abi,
      )
      const topic = contractInterface.getEventTopic('ProxyCreated')

      const options = {
        method: 'POST',
        url: 'https://eth-goerli.g.alchemy.com/v2/7KtCu2ltd_kySqJCYeb7KwfdUYl3yHWg',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        data: {
          id: 1,
          jsonrpc: '2.0',
          method: 'eth_getLogs',
          params: [
            {
              address: addresses,
              fromBlock: '0x429d3b',
              toBlock: 'latest',
              topics: [topic],
            },
          ],
        },
      }

      const response = await axios.request(options)
      const decodedEvents = response.data.result.map((event) => {
        const decodedEvent = contractInterface.parseLog(event)

        return {
          ...parseProxyCreatedEvent(decodedEvent),
          factoryName: FACTORY_CONTRACTS[getAddress(event.address)].name,
          factoryContractAddress: getAddress(event.address),
        }
      })
      return decodedEvents
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  )
}

export const useGetAllBetsOfAProxy = (proxyAddress) => {
  return useQuery(['allBets', proxyAddress], async () => {
    const contractInterface = new ethers.utils.Interface(
      ImplementationContract.abi,
    )
    const topic = contractInterface.getEventTopic('BetPlaced')

    const options = {
      method: 'POST',
      url: 'https://eth-goerli.g.alchemy.com/v2/7KtCu2ltd_kySqJCYeb7KwfdUYl3yHWg',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      data: {
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_getLogs',
        params: [
          {
            address: proxyAddress,
            fromBlock: '0x429d3b',
            toBlock: 'latest',
            topics: [topic],
          },
        ],
      },
    }

    const response = await axios.request(options)
    const decodedEvents = response.data.result.map((event) => {
      const decodedEvent = contractInterface.parseLog(event)

      return {
        ...decodedEvent,
        proxyAddress: getAddress(event.address),
      }
    })
    return decodedEvents
  })
}
