/* eslint-disable array-callback-return */
import React, { useContext, useState } from "react"
import { ProductContext } from "../../Contexts/productContext"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
const CommentMananger = () => {
    const { products } = useContext(ProductContext)
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 6
    const lastPostIndex = currentPage * postPerPage
    const firsPostIndex = lastPostIndex - postPerPage
    const currentPost = products.slice(firsPostIndex, lastPostIndex)
    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-4xl"><span
                className="text-transparent bg-clip-text bg-gradient-to-l to-red-400 from-sky-400">Bình Luận</span></h1>
            <div className="relative overflow-x-auto h-[690px] shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tên sách
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Hình ảnh
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Số bình luận
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tùy chỉnh
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPost.map((item, index) => (
                            <tr key={item._id} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item._id}
                                </th>
                                <td className="px-6 py-4 text-sm">
                                    {item.title}
                                </td>
                                <td className="px-6 py-4">
                                    <img className='w-[60px] h-[60px] overflow-hidden  duration-300' src={item.image} alt="" />
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {item.review_count}
                                </td>
                                <td className="px-6 py-4 flex justify-between items-center mt-4">
                                    <Link to={`/admin/comment/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chi tiết</Link>                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='my-6'>
                        <Pagination
                            totalPosts={products.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
            </div>
        </div>
    )
}
export default CommentMananger