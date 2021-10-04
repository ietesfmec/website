import React, { useState } from 'react';
import { FeaturedArticle, Footer, OtherArticles, Topbar } from '../components'

export default function Article() {
    const [footer, setFooter] = useState(false)
    const showFooter = () => setFooter(true)
    return(
        <div>
            <Topbar/>
            <FeaturedArticle/>
            <OtherArticles showFooter={showFooter}/>
            { footer ? <Footer/> : <></>}
        </div>
    )
}