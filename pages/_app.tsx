import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Poppins } from '@next/font/google'

const poppin = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <main className={poppin.className}>
     <Component {...pageProps} />
    </main>
  </ChakraProvider>
  )
}
