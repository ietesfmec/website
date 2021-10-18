import React, { useState } from 'react';
import styles from './Tile.module.css';

export default function Tile({info}) {
    const [toggle, setToggle] = useState(0); 

    const handleToggle = () => {
        setToggle(t => {
            return t === 0 ? 1 : 0
        })
    }
    return (
        <section>
            <h1>{info.title}</h1>
            <div dangerouslySetInnerHTML={{__html: toggle === 0 ? info.content : info.moreInfo}}></div>
            {
            info.type === 1 ? 
                (<button onClick={handleToggle}>{toggle === 0 ? 'NEXT' : 'PREV'}</button>)
            :
            (<span onClick={handleToggle}></span>)}
        </section>
    )
}