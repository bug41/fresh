import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'
import food0 from '/public/food0.png'

export default function List() {

  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
        <h4 className="title">상품목록</h4>
        {
            products.map((a,i)=>{
                return (
                    <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="food-img"/>
                        {/* <Image src={food0} className="food-img"/> */}
                        <h4>{a} $1000</h4>
                    </div>
                )
            })
        }        
    </div>
  )
}
