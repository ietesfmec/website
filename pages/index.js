import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/home');
  },[])
  return (
    <></>
  )
}
