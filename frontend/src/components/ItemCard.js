import React from 'react'

const ItemCard = (props) => {

    return (
        <div className="">
        <div className="card" >
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.img} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">MXN {props.price}</p>
                    </div>
                </div>
                <div className="content">
                    {props.amount} disponibles. {props.description} 
                </div>
                <div className="buttons">
                    <button id={`button-${props.index}`} 
                    className="button is-info" 
                    onClick={()=>props.onCartChange(props.fullItem)}>Añadir al carrito</button>
                </div>
            </div>
        </div>
        <br/>
        </div>
    )
}

export default ItemCard
