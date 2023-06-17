import { useContext, useEffect, useState } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { ethers } from 'ethers'

const useContract = (address, abi) => {
  const { signer } = useContext(BaseContext)
  const [contract, setContract] = useState()
  const [contractInterface, setContractInterface] = useState()

  useEffect(() => {
    if (!signer) return
    setContract(new ethers.Contract(address, abi, signer))
    setContractInterface(new ethers.utils.Interface(abi))
  }, [signer, address, abi])

  return [contract, contractInterface]
}

export default useContract
