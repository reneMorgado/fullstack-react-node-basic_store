import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Admin from './pages/Admin';
import Index from './pages/Index'
import Cart from './pages/Cart';
import Loading from './pages/Loading';
import ItemsContext from './context/ItemsContext';

const App = () => {

  const {loaded} = useContext(ItemsContext)

  if(!loaded){
    return(
      <Loading/>
    )
  }else{
    return(
        <Router>
            <Hero/>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/" render={()=><Index/>}/>
                    <Route exact path="/cart" render={()=><Cart/>}/>
                    <Route exact path="/admin" render={()=><Admin/>}/>
                </Switch>
            </div>
        </Router>
    )
  }
}


export default App;
