import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { OrderContext } from '../Contexts/orderContext'
import { AuthContext } from '../Contexts/authContext'
import Pagination from './Pagination'
const ListOrder = () => {
    const { id } = useContext(AuthContext)
    const { orders } = useContext(OrderContext)
    const myListOrder = orders.filter(item => item.account_id === id)
    // console.log(myListOrder);
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 6
    const lastPostIndex = currentPage * postPerPage
    const firsPostIndex = lastPostIndex - postPerPage
    const currentPost = myListOrder.slice(firsPostIndex, lastPostIndex)
    return (
        <div>
            <section className='container mx-auto h-screen my-16'>
                <h1 className='text-xl uppercase font-bold my-2'>Lịch sử mua hàng</h1>
                <div className='container shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg w-full py-4 h-fit'>
                    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Mã đơn hàng
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tên người đặt
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phương thức thanh toán
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Trạng thái
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Ngày đặt hàng
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {currentPost.map((item, index) => {
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
                                        <td className="px-6 py-4 text-sm">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.payment === 'CASH' ? (
                                                <div className='ml-4 flex items-center justify-start'>
                                                    <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=10359" alt="" />
                                                    <p className='ml-4 text-sm text-red-800'>Tiền mặt</p>
                                                </div>
                                            ) : item.payment === 'ATM' ? (
                                                <div className='ml-4 flex items-center justify-start'>
                                                    <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayatm.svg?q=10359" alt="" />
                                                    <p className='ml-4 text-sm text-red-800'>ATM</p>
                                                </div>
                                            ) : (
                                                <div className='ml-4 flex items-center justify-start'>
                                                    <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=10359" alt="" />
                                                    <p className='ml-4 text-sm text-red-800'>VNPAY</p>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='text-red-800 font-bold'>{item.status}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            {formattedTime}
                                        </td>
                                        <td className="px-6 py-4 flex justify-between items-center">
                                            <Link to={`/myorder/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Xem chi tiết</Link>

                                        </td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                    <div className='my-10'>
                        <Pagination
                            totalPosts={myListOrder.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ListOrder