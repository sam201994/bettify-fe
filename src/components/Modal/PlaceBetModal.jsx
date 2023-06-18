import React, { useState } from 'react'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { GuessInput } from 'src/components/FormFields'
import { PlaceBetWrapper } from './styles'
import { useGame } from 'src/hooks'
import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { useFormik } from 'formik'
import { extractNaturalNumber, extractDecimalNumber } from 'src/utils/web3Utils'

const PlaceBetModal = ({ showModal, setShowModal, data }) => {
  const { placeBet } = useGame(data.proxyAddress)
  const [loading, setLoading] = useState(false)

  const { values, errors, handleSubmit, touched, setFieldValue } = useFormik({
    initialValues: {
      guess: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.guess) {
        errors.guess = true
      }

      return errors
    },

    onSubmit: async (values) => {
      setLoading(true)
      try {
        event.preventDefault()
        const stakeAmount = data.stakeAmount
        await placeBet(guess, stakeAmount)
        // queryClient.invalidateQueries('allProxies')
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
      setFieldValue(name, num)
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
        />
        <Button label="Place Bet" onClick={handleSubmit} />
      </PlaceBetWrapper>
    </CustomModal>
  )
}

export default PlaceBetModal
