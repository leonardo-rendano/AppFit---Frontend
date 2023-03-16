import Modal  from 'react-modal'
import React from "react"
import { CustomModalProps } from './types';

export const CustomModal = ({ isOpen, onRequestClose, children }: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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