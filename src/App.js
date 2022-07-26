import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import { ItemListContainer } from './components/Containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CartProvider from './CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import EndPurchase from './components/Cart/EndPurchase';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='' element={<h1>No hay productos</h1>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/end' element={<EndPurchase/>}></Route>
        </Routes>
        <Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
