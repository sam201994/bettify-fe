import axios from 'axios'
import { useQuery } from 'react-query'

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
