import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard'
import ItemsContext from '../context/ItemsContext'

const Index = () => {
    const {items, handleAddCart} = useContext(ItemsContext)
    return (
        <div className="container is-max-desktop">
            {
                items.map((item,index)=>{
                    return <ItemCard 
                    name={item.name} 
                    img={item.img} 
                    description={item.description} 
                    amount={item.amount} 
                    price={item.price}
                    key={item.id}
                    id={item.id}
                    index={index}
                    onCartChange={handleAddCart}/>
                })
            }
        </div>
    )
}

export default Index
