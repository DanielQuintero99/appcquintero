import React, { useEffect, useState } from "react";
import CustomFetch from "../data/CustomFetch";
import products from "../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    CustomFetch(2000, products.find(item=>item.id===parseInt(id)))
      .then(result => setProduct(result))
      .catch(error => console.log("error"))
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <>
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
      <div className="colum">
      <ItemDetail prd={product} />
      </div>
    }
     
    </>
  )
}

export default ItemDetailContainer;