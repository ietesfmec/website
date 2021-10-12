import React, { useEffect, useRef, useState } from 'react';
import styles from './MembersList.module.css';
import sampleImage from '../../../public/sample.jpg';
import animate from '../../../hooks/animate';

export default function MembersList({id}) {
    const init = [
        {
            index:0,
            data:[
                [sampleImage.src, 'John Doe'], [sampleImage.src, 'Jane Doe']
            ]
        },
        {
            index:1,
            data:[
                [sampleImage.src, 'Jack Doe'], [sampleImage.src, 'Jill Doe']
            ]
        }
    ];
    
    const [featured, setFeatured] = useState(init[0])
    
    var interval;

    const e1 = useRef();
    const e2 = useRef();

    const findRef = (r1, r2) => {
        if(window.matchMedia('(max-width: 720px)').matches) return r2;
        return r1;
    }

    const forwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
            animate(el.current, 'fadeInRight', 'fast')
        })
        setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
    }
    const backwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutRight', 'fast').then(()=>{
            animate(el.current, 'fadeInLeft', 'fast')
        })
        setFeatured(f => f.index === 0 ? init[init.length - 1] : init[f.index - 1])
    }
    const handleChange = (i) => e => {
        if(featured.index === i)    return;

        const el = findRef(e1, e2);

        if(featured.index < i) {
            animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
                animate(el.current, 'fadeInRight', 'fast')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'fast').then(()=>{
                animate(el.current, 'fadeInLeft', 'fast')
            })
        }
        setFeatured(init[i])
    }

    function makeInterval() {
        clearInterval(interval)
        if(init.length === 0)   return;
        interval = setInterval(()=>{
            forwards();
        },3700 + (id*500))
    }

    useEffect(() => {
        if(id > 0)
            makeInterval()
        return () => { 
            clearInterval(interval)
        }
    },[featured])

    return (
        <main className={styles.main} >
            <div onClick={backwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>      
            <section className={styles.cards} ref={e1}>
                {
                    featured.data.map((member , i)=>{
                        return (
                            <main key={i} ref={e2}>
                                <div>
                                    <img src={member[0]}></img>
                                </div>
                                <p>Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.</p>
                                <h4>{member[1].toUpperCase()}, POSITION</h4>
                                <ul>
                                {init && init.map((_, i) => {
                                    return <li onClick={handleChange(i)} className={ featured.index === i ? styles.active:''} key={i}></li>
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