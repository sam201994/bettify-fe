import { useContext, useEffect, useState } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { ethers } from 'ethers'

export const useContract = (address, abi) => {
  const { provider } = useContext(BaseContext)
  const [contract, setContract] = useState()

  useEffect(() => {
    if (!provider) return
    setContract(new ethers.Contract(address, abi, provider))
  }, [provider, address, abi])

  return contract
}
