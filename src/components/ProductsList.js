import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api/product.service';
import ProductItem from './ProductItem';
/* 
const products = [
    {id : 1, name : "Prodotto Uno", slug : "prodotto-uno"},
    {id : 2, name : "Prodotto Due", slug : "prodotto-due"},
    {id : 3, name : "Prodotto Tre", slug : "prodotto-tre"},
    {id : 4, name : "Prodotto Tre", slug : "prodotto-tre"},
    {id : 5, name : "Prodotto Tre", slug : "prodotto-tre"},
    {id : 6, name : "Prodotto Tre", slug : "prodotto-tre"},
    {id : 7, name : "Prodotto Tre", slug : "prodotto-tre"},
    {id : 8, name : "Prodotto Tre", slug : "prodotto-tre"},
]; */



const ProductsList = () => {

  const [products,setProducts] = useState([]);

  const fetchService = async () =>  {
    try {
      const data = await getProducts();
      setProducts(data)
    } catch (error) {
      // errori eventuali da intercettare
    }
  }

  useEffect(() => {
    fetchService();
  },[])


  return (
    <div>
         <ul role="list" className="grid grid-cols-4 gap-6">
            {products.map(product => {
                return <li key={product.id}>
                    <ProductItem product={product} />
                </li>
            })}
        </ul>
    </div>
  )
}

export default ProductsList