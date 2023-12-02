import React, { createContext, useState, useEffect } from 'react'
import * as request from '../utils/request'
export const ProductContext = createContext()
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fecthProduct = async () => {
      try {
        const res = await request.get('product')
        setProducts(res)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fecthProduct()
  }, [])
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}
export default ProductProvider