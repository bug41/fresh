import {age,name} from './data'

export default function Cart() {
    let cart = ['Tomatoes', 'Pasta']

    return (
        <div>
            <h4 className="title">Cart</h4>            
            <CartItem data={cart[0]} />
            <CartItem data={cart[1]} />
            <Banner data="삼성"/>
            <Banner data="현다이"/>
            <Banner data="롯다이"/>

            <Button color='blue'/>
        </div>
    )
}

function Banner(props){
    return <h5>{props.data}카드 결제 행사중</h5>
}

function Button(props){
    return <div style={{ width:100,height:100,backgroundColor:`${props.color}` }}></div>
}

function CartItem(props){
    return(
        <div className="cart-item">
            <p>{props.data} </p>
            <p>$40</p>
            <p>1개 {age}</p>
        </div>
    )
} 