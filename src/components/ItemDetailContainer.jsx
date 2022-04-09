import React, { useEffect, useState } from "react";
import CustomFetch from "../data/CustomFetch";
import products from "../data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    CustomFetch(2000, products[0])
      .then(result => setProduct(result))
  }, []);

  return (
    <>
      <ItemDetail prd={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer;