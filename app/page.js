import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

export default function Home() {
  let name = 'lee'
  return (
    <div>
     
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}
