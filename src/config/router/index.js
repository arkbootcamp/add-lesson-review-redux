import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import DetailProduct from '../../pages/main/ProductDetail'
import Product from '../../pages/main/Product'
import Landing from '../../pages/Landing'
import EditProduct from '../../pages/main/EditProduct'

const CofigRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Landing/>} />
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/register' element={<Register/>}/>
            <Route path='/main/product' element={<Product/>}/>
            <Route path='/main/product/:id' element={<DetailProduct/>}/>
            <Route path='/main/edit/:id' element={<EditProduct/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default CofigRouter