import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Poppins, sans-serif",
        colorScheme: 'light',
        primaryColor: 'dodgerblue',
        colors: {
          'dodgerblue': ["#C3D6FF", "#99BAFF", "#73A0FF", "#5088FF", "#3173FF", "#145FFF", "#0050FF", "#0046EB", "#003FD4", "#0039BF", "#0033AB", "#002E9A", "#00298B" ],
        }
      }}
    >
    <NormalizeCSS />
      <Component {...pageProps} />
  </MantineProvider>
  )
}

export default MyApp
