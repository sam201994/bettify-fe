import { createContext, useState, useEffect } from 'react'
import { init, useConnectWallet, useSetChain } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'

import { chains, chainMapping } from 'src/utils/supportedChains'

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
  const [{ connectedChain }] = useSetChain()
  const [provider, setProvider] = useState(null)

  // initialize provider without wallet using ethers
  const providerwithoutWallet = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_INFURA_KEY,
  )

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

  return (
    <BaseContext.Provider
      value={{
        account: wallet?.accounts[0]?.address,
        wallet,
        connect,
        disconnect,
        connecting,
        connectedChain: parseInt(connectedChain?.id, 16),
        provider: providerwithoutWallet,
        signer: provider?.getSigner(),
      }}
    >
      {props.children}
    </BaseContext.Provider>
  )
}
