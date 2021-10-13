import React from 'react'
import Head from 'next/head'
import { Activity, Footer, What, Info } from '../components'

//{`${styles.}`}

export default function Home() {
    return (
        <div>
            <Head></Head>
            <What/>
            <Info/>
            <Activity/>
            <Footer secondary="true"/>
        </div>
    )
}

