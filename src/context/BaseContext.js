import { createContext, useEffect, useState } from 'react'
import { init, useConnectWallet, useSetChain } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { chains, getRpcUrl } from 'src/utils/supportedChains'
import { ethers } from 'ethers'

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
  const rpcUrl = getRpcUrl(connectedChain?.id)
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
