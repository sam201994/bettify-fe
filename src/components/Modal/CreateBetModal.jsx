import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useQueryClient } from 'react-query'
import { parseEther } from 'ethers/lib/utils'

import Button from 'src/components/Button'
import { TextField } from 'src/components/FormFields'
import { useFactoryContract } from 'src/hooks'
import { extractNaturalNumber, extractDecimalNumber } from 'src/utils/web3Utils'
import CustomModal from './CustomModal'
import { CreateBetWrapper } from './styles'
import { useRouter } from 'next/router'

const CreateBetModal = ({ showModal, setShowModal, data }) => {
  const { createBet } = useFactoryContract(data.address)
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const router = useRouter()

  const { values, errors, handleSubmit, touched, setFieldValue } = useFormik({
    initialValues: {
      bettingPeriod: '',
      lockinPeriod: '',
      stakeAmount: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.bettingPeriod) {
        errors.bettingPeriod = true
      }
      if (!values.lockinPeriod) {
        errors.lockinPeriod = true
      }
      if (!values.stakeAmount) {
        errors.stakeAmount = true
      }

      return errors
    },

    onSubmit: async (values) => {
      setLoading(true)
      try {
        const bettingExpiration =
          Math.floor(Date.now() / 1000) +
          60 * 60 * 24 * parseInt(values.bettingPeriod)
        const lockInPeriodEnd =
          bettingExpiration + 60 * 60 * 24 * parseInt(values.lockinPeriod)

        const proxyAddress = await createBet(
          bettingExpiration,
          lockInPeriodEnd,
          parseEther(values.stakeAmount),
        )
        queryClient.invalidateQueries('allProxies')
        router.push(`/bets/${proxyAddress}`)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    },
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'bettingPeriod' || name === 'lockinPeriod') {
      const num = extractNaturalNumber(value)
      setFieldValue(name, num)
    } else if (name === 'stakeAmount') {
      const num = extractDecimalNumber(value, 18)
      setFieldValue(name, num)
    } else {
      setFieldValue(name, value)
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
              label="Betting period (days)"
              fullWidth
              name="bettingPeriod"
              id="bettingPeriod"
              value={values.bettingPeriod}
              onChange={handleChange}
              error={touched.bettingPeriod && errors.bettingPeriod}
            />

            <TextField
              required={true}
              label="Lockin period (days)"
              fullWidth
              name="lockinPeriod"
              value={values.lockinPeriod}
              onChange={handleChange}
              error={touched.lockinPeriod && errors.lockinPeriod}
            />
          </div>
          <div className="section-2">
            <TextField
              required={true}
              label="Stake amount (ETH)"
              fullWidth
              name="stakeAmount"
              value={values.stakeAmount}
              onChange={handleChange}
              error={touched.stakeAmount && errors.stakeAmount}
            />
          </div>
        </div>

        <div className="footer-section">
          <Button label="Create bet" onClick={handleSubmit} loader={loading} />
        </div>
      </CreateBetWrapper>
    </CustomModal>
  )
}

export default CreateBetModal
