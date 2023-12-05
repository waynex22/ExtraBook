import React, { createContext, useState, useEffect } from 'react'
import * as request from '../utils/request'
export const CommentContext = createContext()
const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])
  const [dataChanged, setDataChanged] = useState(false);
  useEffect(() => {
    const fectComment = async () => {
      try {
        const res = await request.get('comment')
        setComments(res)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fectComment()
  // eslint-disable-next-line no-use-before-define
  }, [dataChanged])
  const [popup , setPopup] = useState(false)
  const postComment = async (content, rating, product_id , account_id) => {
    try {
      const response = await request.post('comment/add', {
        content,
        rating,
        product_id,
        account_id,
      })
      if(response.status === 201){
        console.log('comment success')
        setDataChanged(true)
      }else{
        setPopup(true)
        console.log('limit cmt');
        setTimeout(() => {
          setPopup(false)
        },2000)
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  return <CommentContext.Provider value={{ comments ,postComment, dataChanged , popup }}>{children}</CommentContext.Provider>
}
export default CommentProvider