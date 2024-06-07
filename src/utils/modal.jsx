import { useState } from "react";

export const useModalHandler = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
      setModalOpen(false)
  }

  return [modalOpen, setModalOpen, handleModalOpen, handleModalClose]
}