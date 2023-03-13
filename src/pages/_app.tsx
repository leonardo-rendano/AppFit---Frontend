import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "@/components/Header";
import TeachersContextProvider from '@/context/teachers/teacherContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TeachersContextProvider>
      <Header />
      <Component {...pageProps} />
    </TeachersContextProvider>
  )
}
