import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Mobile from  './Pages/Mobile';
import Lappy from './Pages/Lappy';
import Electronics from './Pages/Electronics';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import DoneOrder from './Components/Orderlast';


const App = () => {
    
    return(
    <>
      <p className="text-center bg-danger mb-0">20% discount offer for summer is coming</p>
     <Navbar/>
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/mobile' component={Mobile}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signup' component={Signup}/>
       <Route exact path='/lappy' component={Lappy}/>
       <Route exact path='/electro' component={Electronics}/>
       <Route exact path='/cart' component={Cart}/>
       <Route exact path='/orderdone' component={DoneOrder}/>
       <Redirect to='/'/>
     </Switch>
     <Footer/>
    </>
    );
};
export default App;
