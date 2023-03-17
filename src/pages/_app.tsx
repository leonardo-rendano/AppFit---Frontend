import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "@/components/Header";
import TeachersContextProvider from '@/context/teachers/teacherContext';
import { ToastContainer } from 'react-toastify';
import { StudentsContextProvider } from '@/context/students';
import Modal from 'react-modal'
import ModalContextProvider from '@/context/modal';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  Modal.setAppElement('#__next')

  return (
    <>
      <TeachersContextProvider>
        <StudentsContextProvider>
          <ModalContextProvider>
            <Header />
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} theme="colored" position="top-right" />
          </ModalContextProvider>
        </StudentsContextProvider>
      </TeachersContextProvider>
    </>
  )
}
