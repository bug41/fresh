import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from './page.module.css'

export default function List() {
  return (
    <div>        
        <h4 className="title">상품상세</h4>
        <div className="food">
            <h4>상품1 $40</h4>
        </div>
        <div className="food">
            <h4>상품2 $40</h4>
        </div>
    </div>
  )
}
