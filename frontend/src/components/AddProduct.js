import Axios from 'axios'
import React from 'react'

const ApiURL = 'http://localhost:5000'

const AddProduct = () => {

    const sendFormHandler = () => {
        let name = document.getElementById('name').value
        let img = document.getElementById('img').value
        let amount = parseInt(document.getElementById('amount').value,10)
        let price = parseInt(document.getElementById('price').value,10)
        let description = document.getElementById('description').value

        if(name === "" || img === "" || isNaN(amount) || isNaN(price) || description === "" || amount <= 0 || price <= 0){
            alert('Llene los campos correctamente')
        }else{
            let bodyFormData = new FormData();
            bodyFormData.append('name', name)
            bodyFormData.append('img', img)
            bodyFormData.append('amount', amount)
            bodyFormData.append('price', price)
            bodyFormData.append('description', description)

            Axios({
                method: 'POST',
                url: `${ApiURL}/add`,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            })

            document.getElementById('name').value = ""
            document.getElementById('img').value = ""
            document.getElementById('amount').value = 0
            document.getElementById('price').value = 0
            document.getElementById('description').value = ""

            alert('Producto añadido')
            window.location.replace('');
        }
    }

    return (
    <div className="container is-max-desktop">

        <div className="field">
            <label className="label">Nombre del producto</label>
            <div className="control">
                <input className="input" type="text" id="name" placeholder="Nombre del producto"></input>
            </div>
        </div>

        <div className="field">
            <label className="label">Link de la imagen</label>
            <div className="control">
                <input className="input" type="text" id="img" placeholder="Puede ser local '/images/etc.etc' o externa 'http://etc..'"></input>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <label className="label">Cantidad  </label>
                <input className="input" type="number" id="amount" placeholder="Inserte solo el numero"></input>
            </div>
            <div className="control">
                <label className="label">Precio (MXN)  </label>
                <input className="input" type="number" id="price" placeholder="Inserte solo el numero"></input>
            </div>
        </div>


        <div className="field">
            <label className="label">Descripcion del producto</label>
            <div className="control">
                <textarea className="textarea" id="description" placeholder="Descripcion"></textarea>
            </div>
        </div>

        <div className="field ">
            <button onClick={sendFormHandler} className="button is-success is-fullwidth">Añadir producto</button>
        </div>
        <br/><br/>
    </div>
    )
}

export default AddProduct
