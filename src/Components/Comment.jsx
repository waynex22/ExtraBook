import React, { useContext, useEffect, useState } from 'react'
import { Rating } from 'flowbite-react'
import { TEAnimation } from "tw-elements-react"
import CommentList from './CommentList'
import { AuthContext } from '../Contexts/authContext'
import { CommentContext } from '../Contexts/commentContext'
import { useParams } from 'react-router-dom'
import Popup from './Popup';
const Comment = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const { postComment, popup } = useContext(CommentContext)
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    const [account_id, setAccount_id] = useState('')
    const [product_id, setProduct_id] = useState('')
    const handleContent = (e) => {
        setContent(e.target.value);
    }
    const handleStarClick = (value) => {
        setRating(value);
    };
    const handleComment = (e) => {
        e.preventDefault();
        postComment(content, rating, product_id, account_id)
    }
    useEffect(() => {
        if (user) {
            setAccount_id(user.data.id)
            setProduct_id(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    // console.log(rating);

    return (
        <div className=''>
            
            {!user ? (
                <div className='text-xl text-gray-600 my-6'>
                    Đăng nhập để bình luận
                </div>
            ) : (
                <div className="mb-6 mt-6">
                    <h2 className='text-xl font-bold text-gray-900'>Đánh giá sản phẩm</h2>
                    <form>
                        <Rating className='my-3 cursor-pointer'>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <Rating.Star
                                    key={value}
                                    onClick={() => handleStarClick(value)}
                                    filled={value <= rating}
                                />
                            ))}
                        </Rating>
                        <TEAnimation
                            animation="[slide-right_1s_ease-in-out]"
                            reset
                        >
                            <Popup trigger={popup}>
                                <div className="flex bg-red-500  p-4 rounded-xl flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    <span className="text-xl text-white font-bold">Bạn chỉ được phép đánh giá 1 lần</span>
                                </div>
                            </Popup>
                        </TEAnimation>
                        <input type="hidden" id="hiddenRatingInput" name="rating" value={4} />
                        <input type="hidden" id="account_id" name="account_id" value={account_id} />
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-700">
                            <label htmlFor="content" className="sr-only">Bình luận của bạn</label>
                            <textarea onChange={handleContent} id="content" name="content" rows="6" className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:placeholder-gray-400" placeholder="Viết ý kiến của bạn về cuốn sách này..." required></textarea>
                        </div>
                        <div className="flex max-w-[100px] rounded-xl bg-gradient-to-tr from-red-600 to-orange-300  p-0.5 shadow-lg">
                                <button onClick={handleComment} className='flex-1 text-md text-red-600 hover:text-opacity-80 font-bold bg-white py-2 rounded-xl'>Đăng</button>
                            </div>
                    </form>
                </div>
            )
            }
            <CommentList />
        </div >
    )
}

export default Comment
