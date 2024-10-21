import React from 'react'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import { HashRouter as Router , Routes, Route } from 'react-router-dom'    
import Order from './pages/Order'
import SignUp from './pages/SignUp'
import SignIn from './pages/SIgnIn'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/products' element = {<Products/>} />
          <Route path='/signin' element = {<SignIn/>} />
          <Route path='/signup' element = {<SignUp/>} />
          <Route path='/productDetails/:id' element ={<ProductDetails/>}/>
          <Route path='/order/:id' element = {<Order/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
