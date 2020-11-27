import React, { useEffect, useState } from 'react'
import CartCard from '../components/CartCard'


const Cart = (props) => {
    
    const [Total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        props.cart.forEach(item => {
            total = total + item.price
        });
        setTotal(total)
    })

    return (
        <div className="container is-max-desktop">
            {props.cart.map((item)=>{
                return <CartCard img={item.img} name={item.name} price={item.price} amount={item.amount}
                key={item.id} onCartChange={props.onCartChange} fullItem={item}/>
            })}
            <button className="button is-success is-fullwidth">Pagar MXN {Total}</button>
        </div>
    )
}

export default Cart
