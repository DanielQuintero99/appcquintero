import React from "react"
import NabVar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";



export default function App() {
  // antes del return esta la logica, variables ,funciones etc
  return (
  //dentro del return esta lo que se vera en al app,
  //se usan fragments para evitar errores, por que el return espera 1 componente, por ejemplo si pongo dos divs seguidos me tira error. "<></>"
  <>
  <NabVar></NabVar>
  <ItemListContainer></ItemListContainer>
  

  </>
  );
}


