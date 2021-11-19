import React, { useRef } from 'react';
import styles from './Tile.module.css';

export default function Tile({info}) {

    const el = useRef()

    const handleScroll = () => {
        el.current.scrollBy({
            top: 234,
            left: 0,
            behavior: 'smooth'
          })
    }
    return (
        <section>
            <h1>{info.title}</h1>
            <div ref={el} dangerouslySetInnerHTML={{__html: info.content}}></div>
            {
            info.type === 1 ? 
                (<button onClick={handleScroll}>Read More!</button>)
            :
            (<span onClick={handleScroll}>
                
            </span>)}
        </section>
    )
}