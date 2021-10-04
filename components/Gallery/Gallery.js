import React, { useEffect, useRef, useState } from 'react';
import styles from './Gallery.module.css';
import sampleImage from '../../public/sample.jpg';
import useScroll from '../../hooks/scroll';

export default function Gallery({showFooter}) {

    const allSections = ['Section_A', 'Section_B', 'Section_C', 'Section_D']

    const [sections, setSections] = useState([allSections[0]])
    var timeout;
    
    const el = useRef()
    
    const listener = () => {
        if(timeout) clearTimeout(timeout)
        if(el.current?.getBoundingClientRect().bottom <= window.innerHeight) { 
            timeout = setTimeout(() => {
                setSections(prev => {
                    if(prev.length >= allSections.length) {
                        window.removeEventListener('scroll', listener);
                        return prev;
                    }
                    return [...prev, ...allSections.slice(prev.length, prev.length+1)]
                });
                clearTimeout(timeout)
            }, 1000);
        }
    }
    useScroll(el.current, listener)
    
    useEffect(()=>{
        if(sections.length >= allSections.length)
            showFooter()

        return (()=>{
            clearTimeout(timeout)
        })
    },[sections])

    return (
        <div className={styles.encloser} ref={el}>
        <h1>GALLERY</h1>
        { sections && sections.map((sec, i) => {
            return (
                <main className={styles.main  + ` animate__animated animate__fadeIn` + (i%2==0 ? 'Left' : 'Right')} key={i}>
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