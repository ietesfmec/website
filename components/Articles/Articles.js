import React from 'react';
import styles from './Articles.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Article() {
    const articles = [1,2,3,4]
    return(
        <div className={styles.encloser}>
                <h1>Other Articles</h1>
            <main className = {styles.main}>
                {articles && articles.map((_, i) => {
                    return (
                        <div key={i}>
                            <h3>"Title of article"</h3>
                            <section className={styles.row}>
                                <div>
                                    <img src={sampleImage.src}></img>
                                    <span>01 January 2021</span>
                                </div>
                                <div>
                                    
                                    <p><span></span>Mollit labore adipisicing cillum exercitation. Qui Lorem veniam elit velit voluptate do consequat proident enim minim officia quis qui.</p>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}