import React , {createContext, useState, useEffect} from 'react'
import * as request from '../utils/request'
export const OrderContext = createContext()
const OrderProvider = ({children}) => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fecthOrders = async () => {
      try {
        const res = await request.get('order')
        setOrders(res.data)
      } catch (error) {
        console.error('Error fetching Orderss:', error)
      }
    }
    fecthOrders()
  }, [])
  return <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
}
export default OrderProvider