import React from 'react';
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
                    <li>HOME</li>
                    <li>EVENTS</li>
                    <li>GALLERY</li>
                    <li>ARTICLES</li>
                </ul>
            </main>
        </div>
    )
}


