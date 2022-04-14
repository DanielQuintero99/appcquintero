import React, { useEffect } from "react"
import { useState } from "react"
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CustomFetchFilter } from "../data/Fetch";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    CustomFetchFilter(2000, category)
      .then(result => setItems(result))
      .then(() => setIsLoading(false));
  }, [category]);

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
                {category ? <h1>{category[0].toUpperCase() + category.slice(1)}</h1> : <h1>All Products</h1>}
              </div>
              <ItemList prod={items} />
            </>
        }

      </div>
    </>
  );
}