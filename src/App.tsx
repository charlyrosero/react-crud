import React from 'react';
import './App.css';
import Main from './main/Main'
import Products from './admin/Products'
import ProductsCreate from './admin/ProductsCreate'
import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Main/>} />
                <Route path="/admin/Products" element={<Products/>} />
                <Route path="/admin/Products/create" element={<ProductsCreate/>} />
                <Route path="/admin/Products/:id/edit" element={<ProductsEdit/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
