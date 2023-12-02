import React , {createContext, useState, useEffect} from 'react'
import axios from 'axios'
export const CategoryContext = createContext()
const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fecthProduct = async () => {
      await axios.get(`http://localhost:3009/api/category`)
      .then((res) => {
        setCategories(res.data)
      })
    }
    fecthProduct()
  }, [])
  
  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>
}
export default CategoryProvider