import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Admin from './pages/Admin';
import Index from './pages/Index'
import Cart from './pages/Cart';
import axios from 'axios';
import Loading from './pages/Loading';

const ApiURL = 'http://localhost:5000'

const App = () => {

  const [Title,setTitle] = useState('Dulceria')
  const [CartItems, setCartItem] = useState([])
  const [Items, setItems] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${ApiURL}/`
      );
      setItems(result.data)
      setLoaded(true)
    }
    fetchData();
  },[])
  const toggleTitleHandler = (titulo) => {
    setTitle(titulo)
  }

  const addItemHandler = (item) => {
    let i = Items.indexOf( item )
    if(Items[i].amount === 0){
      alert(`Se ha agotado ${item.name}`)
    }else{
      let CartCopy = [...CartItems]
      CartCopy.push(item)
      setCartItem(CartCopy)
      Items[i].amount = Items[i].amount-1;
    }
  } 
  
  const removeItemHandler = (item) => {
    let CartCopy = [...CartItems]
    let i = CartCopy.indexOf( item )
    console.log(item)
    
    CartCopy.splice(i,1)
    console.log(CartCopy)
    setCartItem(CartCopy)
    Items[Items.indexOf(Items.find(itemh => itemh.name === item.name))].amount++
  }

  if(!loaded){
    return(
      <Router >
      <Hero Title={Title}/>
      <Navbar onTitleChange={toggleTitleHandler}/>
      <div>
          <Switch>
              <Route exact path="/" render={(props) => <Loading/> } />
              <Route exact path="/cart" render={(props) => <Loading/>} />
              <Route exact path="/admin" render={(props) => <Loading/>} />
          </Switch>
      </div>
  </Router>
    )
  }else{
    return(
        <Router>
            <Hero Title={Title}/>
            <Navbar onTitleChange={toggleTitleHandler}/>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <Index {...props} cart={CartItems} items={Items} onCartChange={addItemHandler}/> } />
                    <Route exact path="/cart" render={(props) => <Cart {...props} cart={CartItems} onCartChange={removeItemHandler}/>} />
                    <Route exact path="/admin" render={(props) => <Admin {...props} cart={CartItems} items={Items}/>} />
                </Switch>
            </div>
        </Router>
    )
  }
}


export default App;
