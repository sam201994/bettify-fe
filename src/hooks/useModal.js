// import React, { useState } from 'react';

// const useModal = (type) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const renderModalType = () => {
//   	if(type === "PLACE_BET")
//   		return <PlaceBetModal />

//   	return <ModalK />

//   }

//   const Modal = ({ children }) => {
//     return (
//       <>
//         {isModalOpen && (
//           <Modal>
//           	{renderModalType()}
//           </Modal>
//         )}
//       </>
//     );
//   };

//   return { openModal, closeModal, Modal };
// };

// export default useModal;
