import '../styles/globals.css'
import Head from 'next/head'
import { Navbar } from '../components'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="http://www.w3.org"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
    <Navbar/>
  </>
  )
}

export default MyApp
