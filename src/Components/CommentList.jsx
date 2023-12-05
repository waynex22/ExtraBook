import React, { useContext } from 'react'
import CommentItem from './CommentItem'
import { Rating, RatingAdvanced, RatingStar } from 'flowbite-react'
import { CommentContext } from '../Contexts/commentContext'
import { useParams } from 'react-router-dom'
import Loader from './loader'
const CommentList = () => {
    const { id } = useParams()
    const { comments } = useContext(CommentContext)
    if (!comments.data) {
        return <Loader />
    }
    const listCommentById = comments.data.filter((item) => item.product_id === id)
    const listRating = listCommentById.map(item => item.rating)
    // console.log(listRating);
    const checkListComment = listCommentById.length === 0
    return (
        <div>
            <h2 className='text-xl font-bold text-gray-900'>Thống Kê Đánh Giá</h2>
            <>
                <Rating className="mb-2" >
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <div className="ml-2 text-sm font-medium text-gray-500">5 trên 5</div>
                </Rating>
                <div className="mb-4 text-sm font-medium text-gray-500">Số lượng đánh giá ({listCommentById.length})</div>
                {[5,4,3,2,1].map(index => (
                    <RatingAdvanced key={index}  percentFilled={listRating.filter(item => item === index ) * 20  } theme={customTheme} className="mb-2">
                        {`${index} sao`}
                    </RatingAdvanced>
                ))}
            </>
            {checkListComment ? (
                <div className='text-gray-600 text-xl my-6'>Chưa có đánh giá nào</div>
            ): (
                <div className='flex justify-center items-center'>
                <div className='container mx-auto '>
                    <div className='flex flex-col'>
                        {listCommentById.map((comments) => {
                            return <CommentItem comment={comments} key={comments._id} />
                        })}
                    </div>
                </div>
            </div>
            )}
            
        </div>
    )
}
export default CommentList
const customTheme = {
    "base": "flex items-center",
    "label": "text-sm font-medium text-gray-600 ",
    "progress": {
        "base": "mx-4 h-5 w-2/4 rounded bg-gray-200 ",
        "fill": "h-5 rounded bg-yellow-400",
        "label": "text-sm font-medium text-gray-600 "
    }

};