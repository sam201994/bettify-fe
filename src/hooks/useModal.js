import React, { useState } from 'react'
import {
  PlaceBetModal,
  CreateBetModal,
  DeclareWinnerModal,
  WithdrawBetModal,
} from 'src/components/Modal'

const useModal = (data, type) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const renderModalType = () => {
    if (type === 'PLACE_BET')
      return (
        <PlaceBetModal
          showModal={isModalOpen}
          setShowModal={setModalOpen}
          data={data}
        />
      )

    if (type === 'CREATE_BET')
      return (
        <CreateBetModal
          showModal={isModalOpen}
          setShowModal={setModalOpen}
          data={data}
        />
      )
    if (type === 'DECLARE_WINNER')
      return (
        <DeclareWinnerModal
          showModal={isModalOpen}
          setShowModal={setModalOpen}
          data={data}
        />
      )
    if (type === 'WITHDRAW_BET')
      return (
        <WithdrawBetModal
          showModal={isModalOpen}
          setShowModal={setModalOpen}
          data={data}
        />
      )
  }

  const Modal = () => {
    return <>{isModalOpen && <div>{renderModalType()}</div>}</>
  }

  return { openModal, closeModal, Modal, isModalOpen }
}

export default useModal
