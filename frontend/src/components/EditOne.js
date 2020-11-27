import React from 'react'
import Axios from 'axios'

const ApiURL = 'http://localhost:5000'

const EditOne = (props) => {

    const editOneHandler = (id) => {
        let name = document.getElementById(`name${id}`).value
        let img = document.getElementById(`img${id}`).value
        let amount = parseInt(document.getElementById(`amount${id}`).value,10)
        let price = parseInt(document.getElementById(`price${id}`).value,10)
        let description = document.getElementById(`description${id}`).value
        console.log(name,img,amount,price,description)

        if(name === "" || img === "" || isNaN(amount) || isNaN(price) || description === "" || amount <= 0 || price <= 0){
            alert('Llene los campos correctamente')
        }else{
            let newBodyFormData = new FormData();
            newBodyFormData.append('name', name)
            newBodyFormData.append('img', img)
            newBodyFormData.append('amount', amount)
            newBodyFormData.append('price', price)
            newBodyFormData.append('description', description)

            console.log(newBodyFormData)

            Axios({
                method: 'POST',
                url: `${ApiURL}/update/${id}`,
                data: newBodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            })

            alert('Producto actualizado')
            window.location.replace(''); 
        }
    }

    return (
        <div className="container is-max-desktop">

        <div className="field">
            <label className="label">Nombre del producto</label>
            <div className="control">
                <input className="input" type="text" id={`name${props.id}`} placeholder="Nombre del producto" defaultValue={props.name}></input>
            </div>
        </div>

        <div className="field">
            <label className="label">Link de la imagen</label>
            <div className="control">
                <input className="input" defaultValue={props.img} type="text" id={`img${props.id}`} placeholder="Puede ser local '/images/etc.etc' o externa 'http://etc..'"></input>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <label className="label">Cantidad  </label>
                <input className="input" type="number" defaultValue={props.amount} id={`amount${props.id}`} placeholder="Inserte solo el numero"></input>
            </div>
            <div className="control">
                <label className="label">Precio (MXN)  </label>
                <input className="input" type="number"  defaultValue={props.price}id={`price${props.id}`} placeholder="Inserte solo el numero"></input>
            </div>
        </div>


        <div className="field">
            <label className="label">Descripcion del producto</label>
            <div className="control">
                <textarea className="textarea" defaultValue={props.description} id={`description${props.id}`} placeholder="Descripcion"></textarea>
            </div>
        </div>

        <div className="field ">
            <button onClick={()=> editOneHandler(props.id)} className="button is-success is-fullwidth">Guardar cambios</button>
        </div>
        <br/><br/>
    </div>
    )
}

export default EditOne
