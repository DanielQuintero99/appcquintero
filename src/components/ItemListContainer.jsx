import React, { useEffect } from "react"
import { useState } from "react"
import { Spinner } from "react-bootstrap";
import CustomFetch from "../data/CustomFetch";
import products from "../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tittle, setTittle] = useState("");
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      CustomFetch(2000, products.filter(item => item.category === category))
        .then(data => {
          setItems(data);
          setTittle(category[0].toUpperCase()+category.slice(1));
          setIsLoading(false);
        })
    } else {
      CustomFetch(2000, products)
      .then(result => {
        setItems(result);
        setTittle("All Products");
        setIsLoading(false);
      })
        .catch(error => console.log("error"))
        .then(() => setIsLoading(false));
    }
  }, [items, category])

  return (

    <>
      <div className="wrap d-flex justify-content-around mt-2">
        {
          isLoading ?
            <div className="colum">
              <div className="loaderContainer" >
                <Spinner animation="grow" variant="primary" className="spinner-grow-lat" />
                <Spinner className="spinner-grow-Center" animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="primary" className="spinner-grow-lat" />
              </div>
              <h4 className="loadingProducts">Loading...</h4>
            </div>
            :
            <>  
              <div className="mainTitle">
              <h1>{tittle}</h1>
              </div>
              <ItemList prod={items} />   
            </>
        }

      </div>
    </>
  );
}