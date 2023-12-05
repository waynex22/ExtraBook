import React, { createContext, useState, useEffect } from 'react'
import * as request from '../utils/request'
export const ProductContext = createContext()
const ProductProvider = ({ children }) => {
  const [popup, setPopup] = useState(false)
  const [productChanged, setProductChanged] = useState(false)
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
  }, [productChanged])

  const addProduct = async (product) => {
    const res = await request.post('product/add',
      product
    )
    // console.log(product);
    if (res.status === 201) {
      console.log('them thanh cong');
      setPopup(true)
      setTimeout(() => {
        setPopup(false)
      }, 1000)
      setProductChanged(true || false)
    }
    else {
      console.log('loi');
    }
  }
  const updateProduct = async (_id, newProduct) => {
    const res = await request.put(`product/update/${_id}`, newProduct)
    if (res.status === 200) {
      setPopup(true)
      setTimeout(() => {
        setPopup(false)
      }, 1000)
      setProductChanged(true || false)
    } else {
      console.log('err');
    }

  }
  const deleteProduct = async (id) => {
    const res = await request.deleteById(`product/delete/${id}`)
    if (res) {
      setProductChanged(true || false)
    }
  }
  return <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, popup }}>{children}</ProductContext.Provider>
}
export default ProductProvider