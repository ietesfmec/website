import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './MembersList.module.css';
import logo from '../../../public/logo.png';
import animate from '../../../hooks/animate';

export default function MembersList({id, members}) {
    
    const init = members;
    
    const [featured, setFeatured] = useState(init[0])
    
    var interval, timeout;

    const e1 = useRef();
    const e2 = useRef();

    const findRef = (r1, r2) => {
        if(window.matchMedia('(max-width: 720px)').matches) return r2;
        return r1;
    }

    const forwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
            animate(el.current, 'fadeInRight', 'medium')
        })
        timeout = setTimeout(()=>{
            setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
            clearTimeout(timeout)
        }, 600)
    }
    const backwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutRight', 'fast').then(()=>{
            animate(el.current, 'fadeInLeft', 'medium')
        })
        
        timeout = setTimeout(()=>{
            setFeatured(f => f.index === 0 ? init[init.length - 1] : init[f.index - 1])
            clearTimeout(timeout)
        }, 600)
    }
    const handleChange = (i, j) => e => {

        if(featured.index === j)    return;

        const el = findRef(e1, e2);

        if(featured.index < j) {
            animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
                animate(el.current, 'fadeInRight', 'medium')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'fast').then(()=>{
                animate(el.current, 'fadeInLeft', 'medium')
            })
        }
        timeout = setTimeout(()=>{
            setFeatured(init[j])
            clearTimeout(timeout)
        }, 600)
    }

    function makeInterval() {
        clearInterval(interval)
        if(init.length === 0)   return;
        interval = setInterval(()=>{
            if(init.length === 1) return;
            if(id%2 === 0)
                forwards();
            else 
                backwards();
        },8100 
        )
    }

    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
        if (touchendX < (touchstartX - 90)) forwards()
        if (touchendX > (touchstartX + 90)) backwards()
    }
    
    const handleTouchStart = (e) => {
        touchstartX = e.changedTouches[0].screenX;
    }
    const handleTouchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture()
    }

    useEffect(() => {
            makeInterval()
        return () => { 
            clearInterval(interval)
            clearTimeout(timeout)
        }
    },[])

    const imageLoader=({src, width})=>{
        return `${src}?w=${width}`;
    }

    return (
        <main className={styles.main} >
            <div onClick={backwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>      
            <section style={featured?.data.length > 1 ? {'justifyContent' : 'space-between'}:{'justifyContent':'center'}} className={styles.cards} ref={e1}>
                {
                    featured && featured.data && featured.data.map((member , i)=>{
                    
                        return (
                            <main onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} key={i} ref={e2}>
                                <div className={styles.cover} key={member.pic.src}>
                                    <Image alt="member photo" loader={imageLoader} priority src={member.pic} blurDataURL={logo.src} placeholder="blur" layout="fill"></Image>
                                </div>
                                <p>{member.content ? member.content : `${member.position.toUpperCase()}`}</p>
                                <h4>{member.name.toUpperCase()}</h4>
                                <ul>
                                {members.map((_, j) => {
                                    return <li onClick={handleChange(i, j)} className={ featured.index === j ? styles.active:''} key={j}></li>
                                })}
                                </ul>
                            </main>
                        )
                    })
                }
            </section>
            <div onClick={forwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19995 26.4L14 13.6L1.19995 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </main>
    )
}