import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import sampleImage from '../../public/sample.jpg';
import logo from '../../public/logo.png';
import useScroll from '../../hooks/scroll';
import { HashLoader } from 'react-spinners';
import img_1 from '../../public/gallery/1.jpeg';
import img_2 from '../../public/gallery/2.jpeg';
import img_3 from '../../public/gallery/3.jpeg';
import img_4 from '../../public/gallery/4.jpeg';
import img_5 from '../../public/gallery/5.jpeg';
import img_6 from '../../public/gallery/6.jpeg';
import img_7 from '../../public/gallery/7.jpeg';

export default function Gallery({showFooter}) {

    const allSections = [
        {
        title:'Webinars and Conferences',
        content: 'We conduct unique activities and events which invloves interaction and engagement among participants thereby instilling and motivating them to pool ideas and bring out the best innovations possible.',
        images: [
            img_1,
            img_2,
            img_3,
            img_4,
            img_5,
            img_6,
        ]
    }
]

    const [sections, setSections] = useState([allSections[0]])
    const [loading, setLoading] = useState(false);
    var timeout;
    const color = '#14E4E4';
    
    const el = useRef()
    
    const listener = () => {
        if(timeout) clearTimeout(timeout)
        if(el.current?.getBoundingClientRect().bottom <= window.innerHeight) { 
            setLoading(true)
            timeout = setTimeout(() => {
                setSections(prev => {
                    if(prev.length >= allSections.length) {
                        window.removeEventListener('scroll', listener);
                        return prev;
                    }
                    return [...prev, ...allSections.slice(prev.length, prev.length+1)]
                });
                setLoading(false);
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

    const imageLoader=({src, width})=>{
        return `${src}?w=${width}`;
    }

    return (
        <div className={styles.encloser} ref={el}>
        <h1>GALLERY</h1>
        { sections && sections.map((sec, i) => {
            return (
                <main className={styles.main  + ` animate__animated animate__fadeIn` + (i%2==0 ? 'Left' : 'Right')} key={i}>
            <section>
                <h3>{sec.title}</h3>
                <p>{sec.content}</p>
            </section>
            <section className={styles.photos}>
            { sec.images.map((image, j) => {
                return (
                    <div key={j}>
                        <Image loader={imageLoader} layout="fill" src={image} placeholder="blur" blurDataURL={logo}></Image>
                    </div>
                )})
            }
            </section>
        </main>
            )
        })}

        <div hidden={sections.length < allSections.length}></div>
        <HashLoader color={color} loading={sections.length < allSections.length && loading}/>
    </div>
    )
}