import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'

export default function List() {

  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
        <h4 className="title">상품목록</h4>
        {
            products.map((a,i)=>{
                return (
                    <div className="food">
                        <h4>{products[i]} $1000</h4>
                    </div>
                )
            })
        }        
    </div>
  )
}
