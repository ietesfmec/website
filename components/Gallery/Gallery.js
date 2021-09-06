import React from 'react';
import styles from './Gallery.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Gallery() {
    const sections =['Section_A', 'Section_B']
    return (
        <div className={styles.encloser}>
        <h1>GALLERY</h1>
        { sections && sections.map((sec, i) => {
            return (
                <main className={styles.main} key={i}>
            <section>
                <h3>{sec}</h3>
                <p>Est amet et officia cupidatat magna mollit. Nisi anim mollit aliquip ex aute. Consip proquip non. In aliquip consectetur ea ad deserunt aliqua consequat.</p>
            </section>
            <section className={styles.photos}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div>
                <div>
                    <img src={sampleImage.src}/>
                </div> */}
            </section>
        </main>
            )
        })}
        <div></div>
    </div>
    )
}