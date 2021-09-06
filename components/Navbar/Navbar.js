import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Navbar() {
    return (
        <div className={styles.outer}>
            <section className={styles.image}>
                <img src={sampleImage.src}></img>
            </section>
            <main className={styles.inner}>
                <ul>
                    <li><Link href="/home">HOME</Link></li>
                    <li><Link href="/events">EVENTS</Link></li>
                    <li><Link href="/articles">ARTICLES</Link></li>
                    <li><Link href="/gallery">GALLERY</Link></li>
                </ul>
            </main>
        </div>
    )
}


