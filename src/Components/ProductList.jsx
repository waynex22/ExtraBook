import React, { useContext, useState } from 'react'
import { ProductContext } from '../Contexts/productContext'
import { TEAnimation } from 'tw-elements-react'
import Product from './Product'
import Pagination from './Pagination'
const ProductList = () => {
  const { products } = useContext(ProductContext)
  const [currentPage , setCurrentPage] = useState(1)
  const postPerPage = 10
  const lastPostIndex = currentPage * postPerPage 
  const firsPostIndex = lastPostIndex - postPerPage
  const currentPost = products.slice(firsPostIndex, lastPostIndex)
  return (
    <div className='flex justify-center items-center'>
        <div className='container mx-auto '>
        <TEAnimation
        animation="[fade-in_1s_ease-in-out]"
        start="onLoad"
        showOnLoad
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] py-8 h-[900px] max-h-[1092px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {currentPost.map((products) => {
              return <Product product={products} key={products._id} />
            })}
          </div>
          </TEAnimation>
          <div className='my-6'>  
          <Pagination 
          totalPosts={products.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
        </div>
        </div>
    </div>
  )
}

export default ProductList