import { createContext, useState, useEffect } from 'react'
import { init, useConnectWallet, useSetChain } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'

import { chains, chainMapping } from 'src/utils/supportedChains'
import { useGetAllProxies } from 'src/queries'

const wallets = [injectedModule()]

init({
  wallets,
  chains,
  appMetadata: {
    name: 'Safe Bet',
    icon: '<svg>Dapp Icon</svg>',
    description: 'A boilerplate for dapps.',
  },
  connect: {
    autoConnectLastWallet: true,
  },
  accountCenter: {
    desktop: {
      enabled: true,
      position: 'topRight',
    },
  },
})

export const BaseContext = createContext()

export const BaseProvider = (props) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ connectedChain }, setChain] = useSetChain()
  const [provider, setProvider] = useState(null)

  const { data: allBets, isLoading: betsLoading, isFetching: betsFetching } = useGetAllProxies()

  useEffect(() => {
    if (!wallet?.provider) {
      setProvider(null)
    } else {
      const webProvider = new ethers.providers.Web3Provider(
        wallet.provider,
        'any',
      )
      setProvider(webProvider)
    }
  }, [wallet])

  const handleChangeChain = () => {
    setChain({ chainId: '0x5' })
  }

  return (
    <BaseContext.Provider
      value={{
        account: wallet?.accounts[0]?.address,
        wallet,
        connect,
        disconnect,
        connecting,
        connectedChain: parseInt(connectedChain?.id, 16),
        chainNotSupported: connectedChain?.id !== '0x5',
        provider,
        signer: provider?.getSigner(),
        handleChangeChain,
        allBets,
        betsLoading,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  )
}
