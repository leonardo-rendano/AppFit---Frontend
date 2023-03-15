import Modal  from 'react-modal'
import React from "react"
import { useContext } from 'react';
import { StudentsContext } from '@/context/students';
import { CustomModalProps } from './types';

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen }) => {
  const { isModalVisible } = useContext(StudentsContext)

  console.log(isModalVisible)

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1d1d2e',
      width: '70vw',
      height: '70vh'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      <div className='w-full bg-slate-300'>
        <h1>TESTE</h1>
      </div>
    </Modal>
  )
}