import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const randomIntFromInterval = (min = 1, max = 10) =>  { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const ProductItem = ({product}) => {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className=" w-full ">
            {/* <img src="https://fakeimg.pl/450x250/" alt=""  /> */}
            <img src="https://picsum.photos/450/250/" alt=""  />
          </div>

          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{product.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {randomIntFromInterval()}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                Proident esse minim officia consectetur Lorem et sint eiusmod adipisicing reprehenderit ad. Exercitation sit non magna magna fugiat dolore. Ipsum magna consectetur pariatur qui eu tempor. Sit laboris aliqua proident proident excepteur tempor ut fugiat duis ea tempor veniam. Esse pariatur mollit ut ea non proident ex. Do pariatur nostrud voluptate pariatur. Sint velit sit pariatur in et minim cillum amet non veniam cupidatat.
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="-ml-px w-0 flex-1 flex">
                <NavLink 
                  to={`/products/${product.slug}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-gray-200 hover:text-gray-500"
                >
                  <span className="ml-3">Visualizza</span>
                </NavLink>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductItem