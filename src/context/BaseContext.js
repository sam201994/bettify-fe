import { createContext, useEffect, useState } from 'react'
import { init, useConnectWallet, useSetChain } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { chains } from '../utils/supportedChains'
const wallets = [injectedModule()]

init({
  wallets,
  chains,
  appMetadata: {
    name: 'Dapp Boilerplate',
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
  // init hooks
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ connectedChain }] = useSetChain()

  return (
    <BaseContext.Provider
      value={{
        account: wallet?.accounts[0]?.address,
        wallet,
        connect,
        disconnect,
        connecting,
        connectedChain: parseInt(connectedChain?.id, 16),
      }}
    >
      {props.children}
    </BaseContext.Provider>
  )
}
