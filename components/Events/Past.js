import React from 'react';
import styles from './Past.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Past() {
    const past = [1,2,3]
    return (
        <div className={styles.encloser}>
            <main className={styles.main}>
                    <h1>Past Events</h1>
                    {past && past.map((_, i) => {
                        return (
                            <div className={styles.past + ' ' + (i === 1 ? styles.active : '')} key={i}>
                        <section className={styles.cover}>
                            <img src={sampleImage.src}></img>
                        </section>
                        <section className={styles.details}>
                            <span>
                                <h3>Special {i === 1 ? '' : <br/>} Mentions:</h3>
                                <h5>John Doe, AB2C</h5>
                                <h5>Jane Doe, AB2C</h5>
                                <h5>Jack Doe, AB2C</h5>
                            </span>
                            <div>
                                <h3>01 January 2021</h3>
                                <p>Labore mollit id non culpa magna aliquip nulla anim magna. Commodo exercitation sunt sint sit irure anim nostrud laborum.</p>
                            </div>
                        </section>
                    </div>
                        )
                    })}
            </main>
        </div>
    )
}