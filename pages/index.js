import React from 'react';
import { Activity, Footer, What, Info } from '../components';

export default function Home() {
    return (
        <div>
            <What/>
            <Info/>
            <Activity/>
            <Footer secondary="true"/>
        </div>
    )
}