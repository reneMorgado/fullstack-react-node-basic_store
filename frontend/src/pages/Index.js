import React from 'react'
import ItemCard from '../components/ItemCard'

const Index = (props) => {
    return (
        <div className="container is-max-desktop">
            {
                props.items.map((item,index)=>{
                    return <ItemCard 
                    fullItem={item}
                    name={item.name} 
                    img={item.img} 
                    description={item.description} 
                    amount={item.amount} 
                    price={item.price}
                    key={item.id}
                    index={index}
                    onCartChange={props.onCartChange}/>
                })
            }
        </div>
    )
}

export default Index
