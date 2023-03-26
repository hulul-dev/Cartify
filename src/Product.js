import React from 'react'

function Product({title='title',image,price="0.00",rating="1"}) {
  return (
    <div className='product flex flex-col items-center justify-end m-2 p-5 w-full bg-white '>
      <div className='product__info h-24 mb-4 w-full'>
        
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small><strong>{price}</strong>
        </p>
        <div className='product__rating flex'>
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className='w-full object-contain mb-4' src={image} alt=''/>
      <button type="button" className='bg-yellow-500 p-1 text-xs rounded-md'>Add to Basket</button>
    </div>
  )
}

export default Product