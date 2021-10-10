import React from 'react';
import styles from './Connect.module.css'
import mecImage from '../../../public/mec.png';

export default function Connect() {
    return (
        <div className={styles.outer}>
            <div className={styles.encloser}>
                <span></span>
                <main className={styles.main}>
                    <section className={`animate__animated animate__fadeIn`}>
                        <h1>IETE SF MEC</h1>
                        <span></span>
                        <p>Meet our team, the minds behind the curation of the exciting events, webinars, workshops and articles of IETE SF MEC!</p>
                        <div role="button"><h2>LETS CONNECT!</h2></div>
                    </section>
                </main>
            </div>
        </div>
    )
}