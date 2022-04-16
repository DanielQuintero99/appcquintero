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

export default function App() {

  return (
  <>
    <BrowserRouter>
    <NabVar/>
    <Routes> 
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/category/:category" element={<ItemListContainer/>} />
      <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      <Route exact path="cart" element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}


