import React from "react"
import NabVar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {

  return (
  <>
    <NabVar></NabVar>
    <ItemListContainer></ItemListContainer>
    <ItemDetailContainer></ItemDetailContainer>
  </>
  );
}


