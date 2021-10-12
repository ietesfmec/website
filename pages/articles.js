import React, { useState } from 'react';
import { FeaturedArticle, Footer, OtherArticles, Topbar } from '../components';
import Papa from 'papaparse';

export async function getStaticProps() {
    const result = await fetch('https://docs.google.com/spreadsheets/d/1SBuaX-j9bzruHjl2_JlUpl5pa0KqmBT4TuRXQtSnL-0/gviz/tq?tqx=out:csv', {
        method: 'GET',
    });
    const text = await result.text();
    let data = Papa.parse(text).data.slice(1);
    data.forEach((_,i)=>{
        data[i] = data[i].filter(el=>{
            return el!='';
        });
        if(data[i].length<5) {
            while(data[i].length!=5) {
                data[i].push('<none>');
            }
        }
        data[i][4] = data[i][4].slice(0, 110).trim()
        let l = data[i][4].length;
        let lastLetter = data[i][4][l-1];
        if(lastLetter.toLowerCase() != lastLetter.toUpperCase()) {
            data[i][4] += ' - '
        }
    });

    data = data.reverse();
    
    const featured = data.splice(0, 1)[0];
    const articles = data;

    return {
        props: {
            featured, articles
        },
        revalidate:5
    }
}

export default function Article({featured, articles}) {
    const [footer, setFooter] = useState(false)
    const showFooter = () => setFooter(true)
    return(
        <div>
            <Topbar/>
            <FeaturedArticle featured={featured}/>
            <OtherArticles showFooter={showFooter} allArticles={articles}/>
            { footer ? <Footer/> : <></>}
        </div>
    )
}