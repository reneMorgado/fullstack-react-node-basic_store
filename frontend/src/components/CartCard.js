import React from 'react'

const CartCard = (props) => {
    return (
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
            <div className="buttons">
                <button
                className="button is-danger" 
                onClick={()=>props.onCartChange(props.fullItem)}
                >Eliminar del carrito</button>
            </div>
        </div>
    </div>
    )
}

export default CartCard
