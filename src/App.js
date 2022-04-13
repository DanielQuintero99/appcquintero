import React from "react"
import NabVar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {

  return (
  <>
    <BrowserRouter>
    <NabVar/>
    <Routes> 
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

// como poner de forma dinamica las categorias en el navbar
// como poner el loading para cada peticion de datos
// preguntar por el warning de memory leaks

