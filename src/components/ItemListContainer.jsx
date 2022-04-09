import React, { useEffect } from "react"
import { useState } from "react"
import { Spinner } from "react-bootstrap";
import CustomFetch from "../data/CustomFetch";
import products from "../data/data";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    CustomFetch(2000, products)
      .then(result => setItems(result))
      .catch(error => console.log("error"))
      .then(() => setIsLoading(false));
  }, [items])

  return (

    <>
      <div className="wrap d-flex justify-content-around mt-2">
        { 
          isLoading ? 
          <div className="colum">
            <div className="loaderContainer" >
          <Spinner animation="grow" variant="primary" className="spinner-grow-lat" /> 
          <Spinner className="spinner-grow-Center" animation="grow" variant="secondary"/>
          <Spinner animation="grow" variant="primary"className="spinner-grow-lat" />
          </div>
            <h4 className="loadingProducts">Loading...</h4>
          </div>
          : 
          <ItemList prod={items} />
        }
        
      </div>
    </>
  );
}