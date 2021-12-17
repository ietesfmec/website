import '../styles/globals.css';
import Head from 'next/head';
import { Navbar } from '../components';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="http://www.w3.org"/>
    <link rel="preconnect" href="https://drive.google.com"/>
    <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=1" />
    <title>IETE SF MEC</title>
    <meta name="description" content="Official website of IETE student's forum at Government Model Engineering College, Thrikkakara" />
    <meta name="author" content="IETE SF MEC"/>
    <meta name="keywords" content="IETE, iete, iete mec, forum, IETE SF MEC, IETE-SF-MEC, MEC, Model Engineering College, Government Model Engineering College, Thrikkakara, articles, events, team, kochi, kerala, ernakulam, club"/>
    
    <meta property="og:title" content="IETE SF MEC" />
    <meta property="og:description" content="Official website of IETE student's forum at Government Model Engineering College, Thrikkakara" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:url" content="https://iete.mec.ac.in" />

    <link rel="icon" href="/favicon.png" />
  </Head>
  <Component {...pageProps} />
    <Navbar/>
  </>
  )
}

export default MyApp;