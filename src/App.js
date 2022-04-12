import React from "react"
import NabVar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {

  return (
  <>
    <BrowserRouter>
    <NabVar/>
    <Routes> 
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:id" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}


