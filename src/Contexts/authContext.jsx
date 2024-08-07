import React, { createContext, useEffect, useState } from 'react'
import * as request from '../utils/request'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [id , setId] = useState(null) 
  const token = localStorage.getItem('token')  
  const [message, setMessage] = useState('')
  const login = async ({ name, password }) => {
    try {
      const response = await request.post('account/login', {
        name,
        password,
      })

      if (response.status === 204) {
        setMessage('Không tìm thấy tên tài khoản')
      }
      else if (response.status === 208) {
        setMessage('Sai mật khẩu')
      } else {
        setMessage('Đăng nhập thành công')
        const { token } = response.data
        localStorage.setItem('token', token)
        userAuth()
      }
    } catch (error) {
      console.log('loi ' + error)
    }
  }
  useEffect(() => {
    if(user){
      setId(user.data.id)
    }
  },[user])
  useEffect(() => {
    if(token){
      userAuth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const userAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await request.post('account/user/', { token })
      setTimeout(() => {
        setUser(response.data)
      },100)
      
    } catch (error) {
      // console.log('chua login')
    }
  }
  const register = async ({ name, email, password }) => {
    try {
      const response = await request.post('account/add', {
        name,
        email,
        password,
      })
      if (response.status === 201) {
        setMessage('Đăng ký thành công')
        setTimeout(() => {
          login({name, password})
        }, 500)
      }
      else if (response.status === 209) {
        setMessage('Tài khoản đã được sử dụng')
      }
      else {
        setMessage('Email đã được sử dụng')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setMessage('')
  }

  return (<AuthContext.Provider value={{ user, login, register, logout, message, id }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider