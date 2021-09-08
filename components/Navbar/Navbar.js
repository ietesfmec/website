import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Navbar.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Navbar() {
    
    const router = useRouter()
    const [path, setPath] = useState(router.pathname)

    useEffect(()=>{
        setPath(router.pathname)
    },[router.pathname])

    return (
        <div className={styles.outer}>
            <section className={styles.image}>
                <img src={sampleImage.src}></img>
            </section>
            <main className={styles.inner}>
                <ul>
                    <li className={path == "/home" ? styles.active : styles.inactive}><Link  href="/home">HOME</Link></li>
                    <li className={path == "/team" ? styles.active : styles.inactive}><Link href="/team">TEAM</Link></li>
                    <li className={path == "/articles" ? styles.active : styles.inactive}><Link href="/articles">ARTICLES</Link></li>
                    <li className={path == "/gallery" ? styles.active : styles.inactive}><Link href="/gallery">GALLERY</Link></li>
                </ul>
            </main>
        </div>
    )
}


