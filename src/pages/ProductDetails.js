import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams()

    return (
        <div>
            ProductDetails ID: 
            <div className="text-4xl font-bold">{id}</div>
        </div>
    )
}

export default ProductDetails