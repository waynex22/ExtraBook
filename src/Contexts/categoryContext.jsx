import React , {createContext, useState, useEffect} from 'react'
import * as request from '../utils/request'
export const CategoryContext = createContext()
const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fecthProduct = async () => {
      try {
        const res = await request.get('category')
        setCategories(res)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fecthProduct()
  }, [])
  
  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>
}
export default CategoryProvider