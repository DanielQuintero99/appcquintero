import React, { useEffect } from "react"
import { useState } from "react"
import CustomFetch from "../data/CustomFetch";
import products from "../data/data";
import ItemList from "./ItemList";



export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    CustomFetch(2000,products)
    .then(result=>setItems(result))
    .catch(error=>console.log("error"));
  },[items])
 
  return (
  
  <>
  <div className="wrap d-flex justify-content-around mt-2">
    <ItemList prod={items} ></ItemList>
  </div>
  </>
  );
}