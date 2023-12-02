import React, {  createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const AccountContext = createContext()

  const AccountProvider = ({ children }) => {
    const [users , setUsers] = useState([])
 
    useEffect(() => {
        const fecthUser = async () => {
          await axios.get(`http://localhost:3009/api/account`)
          .then((res) => {
            setUsers(res.data)
          })
        }
        fecthUser()
      }, [])

  return (<AccountContext.Provider value={{ users }}>{children}</AccountContext.Provider>
  )
}

export default AccountProvider