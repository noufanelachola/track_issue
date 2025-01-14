import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div className='p-10 bg-white text-black text-2xl hover:bg-gray-500 hover:text-red-700'>
        <AddToCart/>
    </div>
  )
}

export default ProductCard