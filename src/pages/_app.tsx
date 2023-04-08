import '@/styles/globals.css'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import type { AppProps } from 'next/app'
import WalletContextProvider from '@/components/WalletContextProvider'

const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  )
}
