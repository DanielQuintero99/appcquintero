import React from "react"
import NabVar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import CheckOut from "./components/CheckOut";
import LogContext from "./components/LogContext";
import Music from "./components/instruments/Music";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Order from "./components/Order"




export default function App() {

  return (
  <>
  <LogContext>
   <CartContextProvider>
    <BrowserRouter>
    <NabVar/>
    <Routes> 
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/checkout" element={<CheckOut/>}/>
      <Route path="/play" element={<Music/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/order/:id" element={<Order/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  </LogContext>
  </>
  );
}


