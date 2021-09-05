import React from 'react'
import Head from 'next/head'
import { Activity, Footer, Navbar, What } from '../components'
import styles from '../styles/Home.module.css'

//{`${styles.}`}

export default function Home() {
    return (
        <div className={styles.encloser}>
            <Head></Head>
            <What/>
            <Activity/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

