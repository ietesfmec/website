import React from 'react';
import styles from './MembersSection.module.css';
import MembersList from './Members/MembersList';

export default function MembersSection() {
    const x = [1,2,3,4,5,6,7,8]
    return (
        <div>
            <div id="team" className={styles.encloser}>
                <h2>MEET THE TEAM</h2>
                <main className={styles.main}>
                    {
                        [1,2,3,4].map((_,i)=> {
                            return (
                                <MembersList key={i} id={i}/>
                            )
                        })
                    }
            </main>
        </div>
    </div>
)}