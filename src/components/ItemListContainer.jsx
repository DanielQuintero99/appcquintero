import React, { useEffect,useState } from "react"
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection,getDocs, getFirestore} from "firebase/firestore"


export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  

  useEffect(() => {
    setIsLoading(true)
    const db =getFirestore();
    const products=collection(db,"products");
    getDocs(products).then((res)=>{
      // a map is made to the response of the promise where the data acquired from firebase is transformed and set in such a way that it is understandable in js, by means of a spread where item.id is the id that is taken from the object brought from fb and item.data is the rest of the properties of the object.
      let collect=res.docs.map(item=>({id:item.id,...item.data()}));
      let filter=collect.filter(items=>items.categoryId===categoryId);
      categoryId? setItems(filter):setItems(collect)    
    }).then(()=>setIsLoading(false)).catch((err) => {
      alert(err)
  });
   }, [categoryId]);
   
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
              <div className="mainTitle ">
                {categoryId ? <h1>{categoryId[0].toUpperCase() + categoryId.slice(1)}</h1> : <h1>All Products</h1>}
              </div>
              <div className="itemList wrap d-flex justify-content-around mt-2">
              <ItemList prod={items} />
              </div>
            </>
        }

      </div>
    </>
  );
}