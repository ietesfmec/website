import '../styles/globals.css'
import Head from 'next/head'
import { Navbar } from '../components'
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="http://www.w3.org"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400&display=swap" rel="stylesheet"/>
    <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=1" />
    <title>IETE SF MEC</title>
    {/* <meta name="description" content="Official website of IETE-SF-MEC" /> */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
    <Navbar/>
  </>
  )
}

export default MyApp
