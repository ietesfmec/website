import React, { useEffect, useRef, useState } from 'react';
import styles from './Articles.module.css';
import logo from '../../public/logo.png';
import useScroll from '../../hooks/scroll';
import { HashLoader } from 'react-spinners';
import Image from 'next/image';

export default function Article({showFooter, allArticles}) {
    const [articles, setArticles] = useState(allArticles.slice(0, 6));
    const [loading, setLoading] = useState(false);
    var timeout;
    const color = '#14E4E4';
    
    const el = useRef()
    
    const listener = () => {
        if(timeout) clearTimeout(timeout)
        if(el.current?.getBoundingClientRect().bottom <= window.innerHeight) { 
            setLoading(true)
            timeout = setTimeout(() => {
                setArticles(prev => {
                    if(prev.length >= allArticles.length) {
                        window.removeEventListener('scroll', listener);
                        return prev;
                    }
                    return [...prev, ...allArticles.slice(prev.length, prev.length+4)]
                });
                setLoading(false)
                clearTimeout(timeout)
            }, 1000);
        }
    }
    useScroll(el.current, listener)
    
    useEffect(()=>{
        if(articles.length >= allArticles.length)
            showFooter()
        return (()=>{
            clearTimeout(timeout)
        })
    },[articles])

    const imageLoader=({src, width})=>{
        return `${src}?w=${width}`;
    }
    
    return(
        <div className={styles.encloser} ref={el}>
                <h1>Other Articles</h1>
            <main className = {styles.main}>
            
                {articles && articles.map((article, i) => {
                    return (
                        <div key={i} className={`animate__animated animate__fadeInUp animate__faster`}>
                            <h3>"{article[1]}"</h3>
                            <section className={styles.row}>
                                <div className={styles.cover}>
                                    <Image loader={imageLoader} src={article[3]} layout="fill" placeholder="blur" blurDataURL={logo.src}></Image>
                                    <span>by {article[2]}</span>
                                </div>
                                <div>                   
                                    <p><span></span>{article[4]}<br/>Read on!</p>
                                </div>
                            </section>
                        </div>
                    )
                })}
                <HashLoader color={color} loading={articles.length < allArticles.length && loading}/>
            </main>
        </div>
    )
}