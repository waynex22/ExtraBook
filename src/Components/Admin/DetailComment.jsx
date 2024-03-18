import { useContext } from "react"
import { CommentContext } from "../../Contexts/commentContext"
import Loader from "../Loader"
import { useParams } from "react-router-dom"
import { Rating } from 'flowbite-react'
const DetailComment = () => {
    const { _id } = useParams()
    const { comments } = useContext(CommentContext)
    if (!comments.data) {
        return <Loader />
    }
    const comment = comments.data.filter(item => item.product_id === _id)
    // console.log(comment);
    return (
        <div className='container mx-auto py-8'>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-4xl"><span
                className="text-transparent bg-clip-text bg-gradient-to-l to-red-400 from-sky-400">Bình Luận</span></h1>
            <div className='mb-8'>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tên tài khoản
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nội dung
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thời gian
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số sao
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comment.map(item => {
                            const filledStars = Array.from({ length: item.rating }, (_, index) => index + 1);
                            const date = new Date(item.createdAt);
                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();
                            const formattedTime = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
                            return (
                                <tr key={item._id} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item._id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.account_id.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.content}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formattedTime}
                                    </td>
                                    <td className="px-6 flex py-4">
                                        <Rating>
                                            {filledStars.map((star, index) => (
                                                <Rating.Star key={index} />
                                            ))}
                                            {Array.from({ length: 5 - item.rating }, (_, index) => (
                                                <Rating.Star key={item.rating + index} filled={false} />
                                            ))}
                                        </Rating>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default DetailComment