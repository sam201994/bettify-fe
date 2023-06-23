import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import {
  useGetAllBetsOfAProxy,
  useGetAllWithdrawalsOfAProxy,
} from 'src/queries'

const useBetsDetails = (address) => {
  const { allProxies, proxiesLoading } = useContext(BaseContext)

  const { data: allBets, isLoading: betsLoading } =
    useGetAllBetsOfAProxy(address)

  const { data: withdrawals, isLoading: withdrawalsLoading } =
    useGetAllWithdrawalsOfAProxy(address)

  const proxyData = allProxies?.find((bet) => bet.proxyAddress === address)

  return {
    loading: proxiesLoading,
    proxyData,
    betsLoading: betsLoading,
    allBets: allBets,
    withdrawalsLoading: withdrawalsLoading,
    withdrawals: withdrawals,
  }
}

export default useBetsDetails
