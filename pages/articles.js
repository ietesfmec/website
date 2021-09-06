import React from 'react';
import { FeaturedArticle, Footer, OtherArticles, Topbar } from '../components'

export default function Article() {
    return(
        <div>
            <Topbar/>
            <FeaturedArticle/>
            <OtherArticles/>
            <Footer/>
        </div>
    )
}