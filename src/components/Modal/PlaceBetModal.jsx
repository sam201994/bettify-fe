import React, { useState } from 'react'

import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import CustomModal from './CustomModal'
import { GuessInput } from 'src/components/FormFields'
import { PlaceBetWrapper } from './styles'
import { useGame } from 'src/hooks'
import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'

const PlaceBetModal = ({ showModal, setShowModal, data }) => {
  const [guess, setGuess] = useState(null)
  const { placeBet } = useGame(data.proxyAddress)

  const handleGuessChange = (event) => {
    event.preventDefault()
    setGuess(event.target.value)
  }

  const handlePlaceBet = async (event) => {
    event.preventDefault()
    const stakeAmount = data.stakeAmount
    await placeBet(guess, stakeAmount)
  }

  return (
    <CustomModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={'Place bet'}
    >
      <PlaceBetWrapper>
        <GuessInput value={guess} onChange={handleGuessChange} />
        <Button label="Place Bet" onClick={handlePlaceBet} />
      </PlaceBetWrapper>
    </CustomModal>
  )
}

export default PlaceBetModal
