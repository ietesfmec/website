import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Past.module.css';
import logo from '../../../public/logo.png';
import animate from '../../../hooks/animate';
import useScroll from '../../../hooks/scroll';

export default function Past({showFooter, events}) {
    // const all = [1,2,3,4,5,6,7,8,9]
    const [past, setPast] = useState([...events.slice(0,3)])
    const [index, setIndex] = useState(0)
    // const [hideImg, setHideImg] = useState(false)

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
        
        if(events.length - index < 3)   return;

        
        animate(e1.current, 'fadeOutBottomRight', 'slow').then(()=>{
            if(e1.current.classList.contains(styles.active))
                animate(e1.current, 'fadeIn', 'slow')
            else
                animate(e1.current, 'fadeInTopLeft', 'slow')
        })
        animate(e2.current, 'fadeOutBottomRight', 'slow').then(()=>{
            if(e2.current.classList.contains(styles.active))
                animate(e2.current, 'fadeIn', 'slow')
            else
                animate(e2.current, 'fadeInTopLeft', 'slow')
        })
        animate(e3.current, 'fadeOutBottomRight', 'slow').then(()=>{
            if(e3.current.classList.contains(styles.active))
                animate(e3.current, 'fadeIn', 'slow')
            else
            animate(e3.current, 'fadeInTopLeft', 'slow')
        })
        
        timeout = setTimeout(()=>{
            setIndex(prev=>prev+3)
            clearTimeout(timeout)
        }, 1700)
        
    }
    const backwards = () => {
        if(timeout) return;
        if(index < 3)   return;
        
        animate(e1.current, 'fadeOutTopLeft', 'slow').then(()=>{
            if(e1.current.classList.contains(styles.active))
                animate(e1.current, 'fadeIn', 'slow')
            else
                animate(e1.current, 'fadeInBottomRight', 'slower')
        })
        animate(e2.current, 'fadeOutTopLeft', 'slow').then(()=>{
            if(e2.current.classList.contains(styles.active))
                animate(e2.current, 'fadeIn', 'slow')
            else
                animate(e2.current, 'fadeInBottomRight', 'slower')
        })
        animate(e3.current, 'fadeOutTopLeft', 'slow').then(()=>{
            if(e3.current.classList.contains(styles.active))
                animate(e3.current, 'fadeIn', 'slow')
            else
                animate(e3.current, 'fadeInBottomRight', 'slower')
        })
        timeout = setTimeout(()=>{
            setIndex(prev=>prev-3)
            clearTimeout(timeout)
        }, 1700)
    }
    useEffect(()=>{
        listener()
        if(!e1.current.classList.contains(styles.active) && !e2.current.classList.contains(styles.active) && !e3.current.classList.contains(styles.active))
            e2.current.classList.add(styles.active)
    },[])

    useEffect(()=>{
        if(events.length - index < 3)
            setPast([...events.slice(events.length - 3, events.length)])
        else setPast([...events.slice(index, index + 3)])
        return (()=>{
            clearTimeout(timeout)
        })
    }, [index])

    // useEffect(()=>{
    //     setHideImg(true)
    // },[past])

    const handleActive = (ref) => (e) => {
        e1.current.classList.remove(styles.active);
        e2.current.classList.remove(styles.active);
        e3.current.classList.remove(styles.active);
        ref.current.classList.add(styles.active);
    }

    // const handleImg = (e) => {
    //     setHideImg(false)
    // }

    const imageLoader=({src, width})=>{
        return `${src}`;
    }

    return (
        <div className={styles.encloser}>
                    <h1>Our Events</h1>
                    <div className={styles.container}>
                    <span onClick={backwards} disabled={index < 3}>
                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.59995 14L14.4 1.19995L27.2 14" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <main ref={el} className={styles.main}>
                    {past && past.map((event, i) => {
                        let r;
                        if(i===0)   r = e1;
                        if(i===1)   r = e2;
                        if(i===2)   r = e3;
                        return (
                            <div ref={r} onClick={handleActive(r)} className={styles.past} key={i}>
                        <section className={styles.cover} key={event[1]}>
                            {/* <img key={event[1]} src={event[1]} placeholder={logo.src}></img> */}
                            <Image unoptimized priority loader={imageLoader} src={event[1]} layout="fill" placeholder="blur" blurDataURL={logo.src}></Image>
                            <span>
                                <h3>Special Mentions:</h3>
                                <h5 hidden={event[3] === '<none>'}>{event[3]}</h5>
                                <h5 hidden={event[4] === '<none>'}>{event[4]}</h5>
                                <h5 hidden={event[5] === '<none>'}>{event[5]}</h5>
                            </span>
                        </section>
                        <section className={styles.details}>
                            <span>
                                <h3>Special {i === 1 ? '' : <br/>} Mentions:</h3>
                                <h5 hidden={event[3] === '<none>'}>{event[3]}</h5>
                                <h5 hidden={event[4] === '<none>'}>{event[4]}</h5>
                                <h5 hidden={event[5] === '<none>'}>{event[5]}</h5>
                            </span>
                            <div>
                                <h3>{event[0]}</h3>
                                <p>{event[2]}</p>
                            </div>
                        </section>
                    </div>
                        )
                    })}
                    </main>
                    <span onClick={forwards} disabled={events.length - index < 3 || index+3 >= events.length}>
                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.59995 1.19995L14.3999 14L27.2 1.19995" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    </div>
        
        </div>
    )
}