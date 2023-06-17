import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { CreateBetWrapper } from './styles'
import { useFactoryContract } from 'src/hooks'
import { parseEther } from 'ethers/lib/utils'
import { TextField } from 'src/components/FormFields'

const CreateBetModal = ({ showModal, setShowModal, data }) => {
  const [bettingPeriod, setBetting] = useState('')
  const [lockinPeriod, setLockinPeriod] = useState('')
  const [stakeAmount, setStakeAmount] = useState('')
  const { createBet } = useFactoryContract(data.type)

  const handleOnChange = (event) => {
    setStakeAmount(event.target.value)
  }

  const handleCreateBet = async (data) => {
    try {
      const bettingExpiration =
        Math.floor(Date.now() / 1000) + 60 * 60 * 24 * bettingPeriod // 7 days
      const lockInPeriodEnd = bettingExpiration + 60 * 60 * 24 * lockinPeriod // 7 days

      const proxyAddress = await createBet(
        bettingExpiration,
        lockInPeriodEnd,
        parseEther(stakeAmount),
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={'Create Bet'}
    >
      <CreateBetWrapper>
        <div className="top-section">
          <div className="section-1">
            <TextField
              required={true}
              label="Betting period"
              fullWidth
              value={bettingPeriod}
              onChange={() => setBetting(event.target.value)}
            />

            <TextField
              required={true}
              label="Lockin period"
              fullWidth
              value={lockinPeriod}
              onChange={() => setLockinPeriod(event.target.value)}
            />
          </div>
          <div className="section-2">
            <TextField
              required={true}
              label="Stake amount (ETH)"
              fullWidth
              value={stakeAmount}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="footer-section">
          <Button label="Create bet" onClick={handleCreateBet} />
        </div>
      </CreateBetWrapper>
    </CustomModal>
  )
}

export default CreateBetModal
