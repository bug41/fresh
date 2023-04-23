'use client'

import { useState } from "react";

export default function List() {

  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  let [count, afterCount] = useState([0,0,0])
 

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
                        <button 
                            onClick={()=>{
                                let copy = [...count]
                                copy[i]++
                                afterCount(copy)
                            }}
                        >+</button>
                        <span> {count[i]} </span>
                        <button onClick={()=>{ 
                            if(count[i] > 1) {
                                let copy = [...count]
                                copy[i]--
                                afterCount(copy)
                            }
                        }}>-</button>
                    </div>
                )
            })
        }        
    </div>
  )
}
