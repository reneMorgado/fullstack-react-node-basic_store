import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'
import DeleteProducts from '../components/DeleteProducts'
import EditProducts from '../components/EditProducts'

const Admin = (props) => {

    const [add, setAdd] = useState(false)
    const [remove, setRemove] = useState(false)
    const [edit, setEdit] = useState(false)

    let addProduct = null;
    let removeProduct = null;
    let editProduct = null;

    if(add){
        addProduct = <AddProduct></AddProduct>
    }
    if(remove){
        removeProduct = <DeleteProducts items={props.items}></DeleteProducts>
    }
    if(edit){
        editProduct = <EditProducts items={props.items}></EditProducts>
    }

    const handleStateChange = (type) => {
        switch (type) {
            case 0:
                setAdd(!add)
                setEdit(false)
                setRemove(false)
                break;
            case 1:
                setEdit(!edit)
                setAdd(false)
                setRemove(false)
                break;
            case 2:
                setRemove(!remove)
                setAdd(false)
                setEdit(false)
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div className="container is-max-desktop buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button className="button is-info" onClick={()=>{ handleStateChange(0)}}>Añadir productos</button>
                <button className="button is-warning"onClick={()=>{ handleStateChange(1)}}>Editar Productos</button>
                <button className="button is-danger"onClick={()=>{ handleStateChange(2)}}>Eliminar Productos</button>
            </div>
            {addProduct}
            {removeProduct}
            {editProduct}
        </div>
    )
}

export default Admin
