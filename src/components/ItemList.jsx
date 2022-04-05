import React from 'react'
import Item from './Item'


export default function ItemList({prod}) {
  return (
    prod.map(product => {
        return (
        <Item key={product.id} 
        id={product.id} 
        price={product.price} 
        name={product.name} 
        image={product.image} 
        description={product.description}/>
        )
    })
  )
}

