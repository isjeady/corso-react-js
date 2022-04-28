import React from 'react'
import { Link } from 'react-router-dom';

const products = [
    {id : 1, name : "Prodotto Uno", slug : "prodotto-uno"},
    {id : 2, name : "Prodotto Due", slug : "prodotto-due"},
    {id : 3, name : "Prodotto Tre", slug : "prodotto-tre"},
];


const Products = () => {
  return (
    <div>
        <ul className="list-disc">
            {products.map(product => {
                return <li>
                    <Link to={`/products/${product.slug}`}>{product.name}</Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Products