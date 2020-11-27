import React, { useState } from 'react'
import EditOne from './EditOne'


const EditCard = (props) => {

    const[editing, setEditing] = useState(false)

    let editOne = null
    let btnText = "Editar"

    if(editing){
        editOne = <EditOne name={props.name} id={props.id} description={props.description} img={props.img} amount={props.amount} price={props.price}/>
        btnText = "Cerrar edición"
    }

    const editingChangeHandler = () => {
        let edcp = editing;
        edcp = !edcp
        setEditing(edcp)
    }

    return (
        <div>
            <div className="card" >
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="button is-warning" onClick={()=> editingChangeHandler(props.id)}>{btnText}</button>
                    </div>
                </div>
            </div>
            <br/>
            {editOne}
        </div>

    )
}

export default EditCard
