import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { BaseContext } from 'src/context/BaseContext'
import Sample from 'src/containers/Sample'

export default function Home() {
  const { connect, connecting, account, disconnect, wallet } =
    useContext(BaseContext)

  return (
    <>
      <Sample />
      <div>Hi</div>
      <div>Connecting: {connecting.toString()}</div>
      <div>Wallet: {account}</div>
      {!account ? (
        <button onClick={() => connect()}>Connect Wallet</button>
      ) : (
        <button onClick={() => disconnect(wallet)}>Disconnect Wallet</button>
      )}
    </>
  )
}
