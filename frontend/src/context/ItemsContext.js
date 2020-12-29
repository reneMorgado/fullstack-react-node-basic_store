import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiURL = 'http://localhost:5000'
const ItemsContext = React.createContext(null)

export const ItemsContextProvider = ({children}) => {

  const [items, setItems] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    (async () => {
      const result = await axios(
        `${ApiURL}/`
      );
      setItems(result.data)
      setLoaded(true)
    })()
  },[])

  const handleAddCart = (id) => {
    let cartCopy = [...cart]
    let itemsCopy = [...items]
    let itemIndex = itemsCopy.findIndex(item=> item.id === id)
    if(itemsCopy[itemIndex].amount > 0){
      itemsCopy[itemIndex].amount -= 1
      let addedItem = itemsCopy.filter(item => item.id === id)
      cartCopy.push(addedItem[0])
      setCart(cartCopy)
      setItems(itemsCopy)
    }else{
      alert('Producto Agotado')
    }
  }

  const handleDeleteCart = (id) => {
    let cartCopy = [...cart]
    let itemsCopy = [...items]
    let itemIndex = itemsCopy.findIndex(item=> item.id === id)
    itemsCopy[itemIndex].amount += 1
    let removeIndex = cartCopy.findIndex(item => item.id === id)
    cartCopy.splice(removeIndex,1)
    setCart(cartCopy)
    setItems(itemsCopy)
  }

  return(
    <ItemsContext.Provider value={{items, loaded, cart, handleAddCart, handleDeleteCart}}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContext