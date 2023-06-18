import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { useGetAllBetsOfAProxy } from 'src/queries'

const useBetsDetails = (address) => {
  const { allProxies, proxiesLoading } = useContext(BaseContext)

  const { data: allBets, isLoading: betsLoading } = useGetAllBetsOfAProxy()

  console.log({ allBets })

  const proxyData = allProxies?.find((bet) => bet.proxyAddress === address)

  return {
    loading: proxiesLoading,
    proxyData,
    betsLoading: betsLoading,
    allBets: allBets,
  }
}

export default useBetsDetails
