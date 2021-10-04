import React, { useState } from 'react';
import { Footer, Galleria, Topbar } from '../components';

export default function Gallery() {
    const [footer, setFooter] = useState(false)
    const showFooter = () => setFooter(true)
    return (
        <div>
            <Topbar/>
            <Galleria showFooter={showFooter}/>
            { footer ? <Footer/> : <></>}
        </div>
    )
}