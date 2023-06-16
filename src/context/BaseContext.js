import { createContext } from 'react'
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
  const rpcUrl = chainMapping[connectedChain?.id || '0x1'].rpcUrl
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

  return (
    <BaseContext.Provider
      value={{
        account: wallet?.accounts[0]?.address,
        wallet,
        connect,
        disconnect,
        connecting,
        connectedChain: parseInt(connectedChain?.id, 16),
        provider,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  )
}
