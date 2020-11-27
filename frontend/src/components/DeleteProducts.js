import React from 'react'
import DeleteCard from './DeleteCard'


const DeleteProducts = (props) => {
    return (
        <div className="container is-max-desktop">
            {props.items.map((item,index)=>{
                return <DeleteCard name={item.name} id={item.id}
                key={item.id}/>
            })}
        </div>
    )
}

export default DeleteProducts
