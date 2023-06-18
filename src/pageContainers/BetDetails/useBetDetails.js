import { cleanNumberInput, commifyNumber } from 'src/utils/web3Utils'
import { PageContainer } from 'src/appLayout/styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Header from './Header'
import TicketCard from './TicketCard'
import BetDetailsBanner from './BetDetailsBanner'
import {
  BetsPlacedHeaderWrapper,
  TicketContainerWrapper,
  TicketListWrapper,
  DividerWrapper,
} from './styles'
import { useModal } from 'src/hooks'
import Fallback from 'src/components/Fallback'
import Placeholder from 'src/components/Placeholder'
import { useRouter } from 'next/router'
import { BaseContext } from 'src/context/BaseContext'
import { useContext, useState, useEffect } from 'react'
import { useGetAllBetsOfAProxy } from 'src/queries'

const useBetsDetails = (address) => {
  const { allProxies, proxiesLoading } = useContext(BaseContext)

  const {
    data: allBets,
    isLoading: betsLoading,
    isFetching: betsFetching,
  } = useGetAllBetsOfAProxy()

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
