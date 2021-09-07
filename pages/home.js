import React from 'react'
import Head from 'next/head'
import { Activity, Footer, Navbar, What } from '../components'

//{`${styles.}`}

export default function Home() {
    return (
        <div>
            <Head></Head>
            <What/>
            <Activity/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

