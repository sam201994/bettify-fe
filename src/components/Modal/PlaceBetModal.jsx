import React, { useState, useEffect, useContext } from 'react'
import Button from 'src/components/Button'
import { useFormik } from 'formik'
import { useQueryClient } from 'react-query'

import { GuessInput } from 'src/components/FormFields'
import { useGame, useGetBalances } from 'src/hooks'
import { BaseContext } from 'src/context/BaseContext'
import { extractNaturalNumber } from 'src/utils/web3Utils'
import CustomModal from './CustomModal'
import { PlaceBetWrapper } from './styles'

const PlaceBetModal = ({ showModal, setShowModal, data }) => {
  const { account } = useContext(BaseContext)
  const queryClient = useQueryClient()
  const { fetchEthBalance } = useGetBalances()
  const { placeBet } = useGame(data.proxyAddress)
  const [loading, setLoading] = useState(false)
  const [walletEthBalance, setWalletEthBalance] = useState(0)

  useEffect(() => {
    fetchEthBalance(account).then((balance) => {
      setWalletEthBalance(balance)
    })
  }, [])

  const { values, errors, handleSubmit, touched, setFieldValue } = useFormik({
    initialValues: {
      guess: '',
    },
    validate: (values) => {
      const errors = {}
      if (!values.guess) {
        errors.guess = true
      }
      if (+walletEthBalance.balanceInWei < +data.stakeAmount) {
        errors.guess = true
      }
      return errors
    },

    onSubmit: async (values) => {
      setLoading(true)
      try {
        await placeBet(values.guess, data.stakeAmount)
        queryClient.invalidateQueries('allBets')
        setShowModal(false)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    },
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'guess') {
      const num = extractNaturalNumber(value)
      setFieldValue(name, num)
    } else {
      setFieldValue(name, value)
    }
  }

  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={'Place bet'}
    >
      <PlaceBetWrapper>
        <GuessInput
          betData={data}
          placeholder={'Type your guess here...'}
          required={true}
          error={touched.guess && errors.guess}
          value={values.guess}
          name="guess"
          onChange={handleChange}
          walletEthBalance={walletEthBalance?.balanceInEth}
        />
        <Button
          label="Place Bet"
          onClick={handleSubmit}
          disabled={Object.keys(errors).length > 0}
          loader={loading}
        />
      </PlaceBetWrapper>
    </CustomModal>
  )
}

export default PlaceBetModal
