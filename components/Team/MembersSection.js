import React from 'react';
import styles from './MembersSection.module.css';
import MembersList from './Members/MembersList';

export default function MembersSection() {
    const members = [
        [
            {
                name: 'John Doe',
                position: 'Faculty',
                content: 'Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.',
                pic: ''
            },
            {
                name: 'Jack Doe',
                position: 'Faculty',
                content: 'Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.',
                pic: ''
            }
    ], [
        {
            name: 'Navanit Nandakumar',
            position: 'EC Head',
            content: '',
            pic: ''
        },
        {
            name: 'Ananya Ajith Kallungal',
            position: 'EEE Head',
            content: '',
            pic: ''
        },
        {
            name: 'Anitha S Menon',
            position: 'CS Head',
            content: '',
            pic: ''
        },
        {
            name: 'Merin Thresia Judy',
            position: 'Communication Coordinator',
            content: '',
            pic: ''
        }
    ], [
        {
            name: 'Sangeeth S',
            position: 'Chairperson',
            content: '',
            pic: ''
        },
        {
            name: 'Jerom Joseph Joy',
            position: 'Vice Chairperson',
            content: '',
            pic: ''
        },
        {
            name: 'Samyuktha K',
            position: 'General Secretary ',
            content: '',
            pic: ''
        },
        {
            name: 'Unnikrishnamenon M',
            position: 'Secretary',
            content: '',
            pic: ''
        }
    ], [
        {
            name: 'Namitha Shaji',
            position: 'Joint Secretary',
            content: '',
            pic: ''
        },
        {
            name: 'A S Muhammed Jaseem',
            position: 'Program coordinator',
            content: '',
            pic: ''
        },
        {
            name: 'Mohammed Fudhail P',
            position: 'Technical head',
            content: '',
            pic: ''
        },
        {
            name: 'Joann Elizabeth',
            position: 'Content Head',
            content: '',
            pic: ''
        }
    ], [
        {
            name: 'Abhirami B M',
            position: 'Tech Head',
            content: '',
            pic: ''
        },
        {
            name: 'Nayantara Thomas',
            position: 'Content Head',
            content: '',
            pic: ''
        },
        {
            name: 'Haripriya H Nair',
            position: 'Treasurer',
            content: '',
            pic: ''
        },
        {
            name: 'Riya Lalu',
            position: 'Design head',
            content: '',
            pic: ''
        }
    ] 
]
    return (
        <div>
            <div id="team" className={styles.encloser}>
                <h2>MEET THE TEAM</h2>
                <main className={styles.main}>
                    {
                        members.map((members,i)=> {
                            return (
                                <MembersList key={i} id={i} members={members}/>
                            )
                        })
                    }
            </main>
        </div>
    </div>
)}