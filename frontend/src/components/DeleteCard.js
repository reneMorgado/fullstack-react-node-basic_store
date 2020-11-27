import Axios from 'axios'
import React from 'react'
const ApiURL = 'http://localhost:5000'
const DeleteCard = (props) => {

    const DeleteItemHandler = (id) => {
        if(window.confirm('Esta acción no puede ser deshecha')){
            Axios({
                method: 'DELETE',
                url: `${ApiURL}/delete/${id}`
            })
            alert('Producto eliminado')
            window.location.replace('');
        }
    }

    return (
        <div className="">
            <div className="card" >
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="button is-danger" 
                        onClick={()=> DeleteItemHandler(props.id)}
                        >Eliminar</button>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default DeleteCard
