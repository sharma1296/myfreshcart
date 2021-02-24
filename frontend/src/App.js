import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import Footer from './Components/Footer'

import ProductScreen from './Screens/ProductScreen';
import { Container } from 'react-bootstrap';
import LoginScreen from "./Screens/LoginScreen"
import HomeScreen from './Screens/HomeScreen'
import CartScreen from './Screens/CartScreen'
import RegisterScreen from "./Screens/RegisterScreen"
import ProfileScreen from "./Screens/ProfileScreen"
import ShippingScreen from "./Screens/ShippingScreen"
import PaymentScreen from "./Screens/PaymentScreen"

import OrderScreen from "./Screens/OrderScreen"
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';

import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from "./Screens/OrderListScreen"
import Header from './Components/Header';
import ProductListScreen from './Screens/ProductListScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import AboutUS from "./Pages/AboutUs"

function App() {
  return (
    <BrowserRouter>
<Header/>
   
   <Container>
        <main className="py-3">
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/aboutus' component={AboutUS}/>
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        </Container>
      <Footer/>
    
  
    </BrowserRouter>
  )
}

export default App
