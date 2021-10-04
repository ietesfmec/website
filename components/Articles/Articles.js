import React, { useEffect, useRef, useState } from 'react';
import styles from './Articles.module.css';
import sampleImage from '../../public/sample.jpg';
import useScroll from '../../hooks/scroll';
import { HashLoader } from 'react-spinners';

export default function Article({showFooter}) {
    const [articles, setArticles] = useState([1, 2]);
    const [loading, setLoading] = useState(false);
    const allArticles = [1,2,3,4,5,6,7,8,9]
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
                    return [...prev, ...allArticles.slice(prev.length, prev.length+2)]
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
    
    return(
        <div className={styles.encloser} ref={el}>
                <h1>Other Articles</h1>
            <main className = {styles.main}>
            
                {articles && articles.map((_, i) => {
                    return (
                        <div key={i} className={`animate__animated animate__fadeInUp animate__faster`}>
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
                <HashLoader color={color} loading={true}/>
            </main>
        </div>
    )
}