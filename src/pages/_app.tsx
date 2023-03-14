import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "@/components/Header";
import TeachersContextProvider from '@/context/teachers/teacherContext';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <TeachersContextProvider>
        <Header />
        <Component {...pageProps} />
      </TeachersContextProvider>
    </>
  )
}
