import Modal  from 'react-modal'
import React, { useContext } from "react"
import { CustomModalProps } from './types';
import { ModalContext } from '@/context/modal';

export const CustomModal = ({  children }: CustomModalProps) => {
  const { isModalVisible, handleCloseModal } = useContext(ModalContext)

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(34, 31, 31, 0.75)'
        },
        content: {
          top: '50%',
          bottom: 'auto',
          left: '50%',
          right: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          width: '60vw',
          height: 'auto'
        }
      }}
    >
      {children}
    </Modal>
  )
}