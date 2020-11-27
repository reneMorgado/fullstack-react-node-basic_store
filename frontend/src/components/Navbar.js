import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog,faCartPlus,faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '@polymer/paper-tooltip/paper-tooltip.js';

const Navbar = (props) => {

    return (
        <div className="container is-max-desktop buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link to="/admin" id="adminLink" onClick={()=>{props.onTitleChange('Administar productos')}} className="button is-danger is-light"><FontAwesomeIcon icon={faUsersCog} /></Link>
            <paper-tooltip for="adminLink">Administrar productos</paper-tooltip>
            <Link to="/cart" id="cartLink"onClick={()=>{props.onTitleChange('Carrito')}} className="button is-warning is-light"><FontAwesomeIcon icon={faCartPlus} /></Link>
            <paper-tooltip for="cartLink">Carrito</paper-tooltip>
            <Link to="/" id="indexLink" onClick={()=>{props.onTitleChange('Dulceria')}} className="button is-success is-light"><FontAwesomeIcon icon={faHome} /></Link>
            <paper-tooltip for="indexLink">Todos los productos</paper-tooltip>
        </div>
    )
}

export default Navbar
