import React , {createContext, useState, useEffect} from 'react';
import axios from 'axios'
 export const ProductContext = createContext();


const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/1')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
export default ProductProvider;