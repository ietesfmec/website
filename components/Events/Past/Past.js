import React, { useEffect, useRef, useState } from 'react';
import styles from './Past.module.css';
import sampleImage from '../../../public/sample.jpg';
import animate from '../../../hooks/animate';
import useScroll from '../../../hooks/scroll';

export default function Past({showFooter}) {
    const all = [1,2,3,4,5,6,7,8,9]
    const [past, setPast] = useState([...all.slice(0,3)])
    const [index, setIndex] = useState(0)
    var timeout;

    const e1 = useRef()
    const e2 = useRef()
    const e3 = useRef()

    const el = useRef()
    
    const listener = () => {
        
        if(e2.current?.getBoundingClientRect().top <= window.innerHeight) { 
            window.removeEventListener('scroll', listener);
            animate(el.current, 'fadeIn', 'animate__medium').then(() => {
                el.current.style.opacity=1;
                showFooter()
            })
        }
    }
    useScroll(el.current, listener)
    

    const forwards = () => {
        if(timeout) return;
        
        if(all.length - index < 3 || index+3 >= all.length)   return;
        
        animate(e1.current, 'fadeOutBottomRight', 'slow').then(()=>{
            animate(e1.current, 'fadeInTopLeft', 'faster')
        })
        animate(e2.current, 'fadeOutBottomRight', 'slow').then(()=>{
            animate(e2.current, 'fadeIn', 'slower')
        })
        animate(e3.current, 'fadeOutBottomRight', 'slow').then(()=>{
            animate(e3.current, 'fadeInTopLeft', 'slower')
        })
        
        timeout = setTimeout(()=>{
            setIndex(prev=>prev+3)
            clearTimeout(timeout)
        }, 1000)
        
    }
    const backwards = () => {
        if(timeout) return;
        if(index < 3)   return;
        
        animate(e1.current, 'fadeOutTopLeft', 'slow').then(()=>{
            animate(e1.current, 'fadeInBottomRight', 'faster')
        })
        animate(e2.current, 'fadeOutTopLeft', 'slow').then(()=>{
            animate(e2.current, 'fadeIn', 'slower')
        })
        animate(e3.current, 'fadeOutTopLeft', 'slow').then(()=>{
            animate(e3.current, 'fadeInBottomRight', 'slower')
        })
        timeout = setTimeout(()=>{
            setIndex(prev=>prev-3)
            clearTimeout(timeout)
        }, 500)
    }
    useEffect(()=>{
        listener()
    },[])

    useEffect(()=>{
        setPast([...all.slice(index, index+3)])
        return (()=>{
            clearTimeout(timeout)
        })
    }, [index])

    return (
        <div className={styles.encloser}>
                    <h1>Past Events</h1>
                    <main ref={el} className={styles.main}>
                    <span onClick={backwards} disabled={index < 3}>
                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.59995 14L14.4 1.19995L27.2 14" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    {past && past.map((_, i) => {
                        let r;
                        if(i===0)   r = e1;
                        if(i===1)   r = e2;
                        if(i===2)   r = e3;
                        return (
                            <div ref={r} className={styles.past + ' ' + (i === 1 ? styles.active : '')} key={i}>
                        <section className={styles.cover}>
                            <img src={sampleImage.src}></img>
                            <span>
                                <h3>Special Mentions:</h3>
                                <h5>John Doe, AB{_}C</h5>
                                <h5>Jane Doe, AB{_}C</h5>
                                <h5>Jack Doe, AB{_}C</h5>
                            </span>
                        </section>
                        <section className={styles.details}>
                            <span>
                                <h3>Special {i === 1 ? '' : <br/>} Mentions:</h3>
                                <h5>John Doe, AB{_}C</h5>
                                <h5>Jane Doe, AB{_}C</h5>
                                <h5>Jack Doe, AB{_}C</h5>
                            </span>
                            <div>
                                <h3>NAME</h3>
                                <p>Labore mollit id non culpa magna aliquip nulla anim magna. Commodo exercitation sunt sint sit irure anim nostrud laborum.</p>
                            </div>
                        </section>
                    </div>
                        )
                    })}
                    <span onClick={forwards} disabled={all.length - index < 3 || index+3 >= all.length}>
                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.59995 1.19995L14.3999 14L27.2 1.19995" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    </main>
        
        </div>
    )
}