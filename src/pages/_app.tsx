import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "@/components/Header";
import TeachersContextProvider from '@/context/teachers/teacherContext';
import { ToastContainer } from 'react-toastify';
import { StudentsContextProvider } from '@/context/students';
import Modal from 'react-modal'

export default function App({ Component, pageProps }: AppProps) {
  Modal.setAppElement('#__next')

  return (
    <>
      <ToastContainer />
      <TeachersContextProvider>
        <StudentsContextProvider>
          <Header />
          <Component {...pageProps} />
        </StudentsContextProvider>
      </TeachersContextProvider>
    </>
  )
}
