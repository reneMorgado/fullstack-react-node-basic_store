import React, { useContext, useEffect, useState } from 'react'
import CartCard from '../components/CartCard'
import ItemsContext from '../context/ItemsContext';
import Axios from 'axios'

const ApiURL = 'http://localhost:5000'

const Cart = () => {
    
    const [Total, setTotal] = useState(0);
    const {items,cart, handleDeleteCart } = useContext(ItemsContext)

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total = total + item.price
        });
        setTotal(total)
    })

    const handleSendItemsUpdate = async() => {
        await items.forEach(item => {
            if(item.amount === 0){
                Axios({
                    method: 'DELETE',
                    url: `${ApiURL}/delete/${item.id}`
                })
            }else{
                console.log(item)
                let newBodyFormData = new FormData();
                newBodyFormData.append('name', item.name)
                newBodyFormData.append('img', item.img)
                newBodyFormData.append('amount', item.amount)
                newBodyFormData.append('price', item.price)
                newBodyFormData.append('description', item.description)
                Axios({
                    method: 'POST',
                    url: `${ApiURL}/update/${item.id}`,
                    data: newBodyFormData,
                    headers: {'Content-Type': 'multipart/form-data' }
                })
            }
        });
        alert('Gracias por su compra!')
        window.location.replace('')
    }

    return (
        <div className="container is-max-desktop">
            {cart.map((item)=>{
                return <CartCard img={item.img} name={item.name} price={item.price} amount={item.amount}
                key={item.id * Math.random()} onCartChange={handleDeleteCart} id={item.id}/>
            })}
            <button className="button is-success is-fullwidth" onClick={handleSendItemsUpdate}>Pagar MXN {Total}</button>
        </div>
    )
}

export default Cart
