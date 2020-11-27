import React from 'react'
import EditCard from './EditCard'


const EditProducts = (props) => {
    return (
        <div className="container is-max-desktop">
        {props.items.map((item,index)=>{
            return <EditCard name={item.name} id={item.id} description={item.description} img={item.img} amount={item.amount} price={item.price}
            key={item.id}/>
        })}
    </div>
    )
}

export default EditProducts
