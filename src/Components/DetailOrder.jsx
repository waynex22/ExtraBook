import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { OrderContext } from "../Contexts/orderContext"
import { formattedNumber } from '../utils/formatteNumber'
import Loader from './Loader'
const DetailOrder = () => {
    const { id } = useParams()
    const { orders } = useContext(OrderContext)
    if (!orders) {
        return <Loader />
    }
    const detailOrder = orders.find(item => item._id === id)
    if (!detailOrder) {
        return <Loader />
    }
    const listItemCart = detailOrder.products.map(item => item.product_id)
    const quantity = detailOrder.products.map(item => item.quantity)
    console.log(quantity);
    const date = new Date(detailOrder.createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedTime = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
    // console.log(listItemCart);


    return (
        <section className='container mx-auto h-screen my-16'>
            <h1 className='text-xl uppercase font-bold my-2'>Thông tin chi tiết về đơn hàng: {detailOrder._id}</h1>
            <div className='container shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg w-full py-4 my-6 h-fit'>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2 h-fit m-4">
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Tên người đặt: </p>
                            <p className="mx-4 text-gray-700">{detailOrder.name}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Địa chỉ Email: </p>
                            <p className="mx-4 text-gray-700">{detailOrder.email}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Số điện thoại: </p>
                            <p className="mx-4 text-gray-700">{detailOrder.phone}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Địa chỉ giao hàng: </p>
                            <p className="mx-4 text-gray-700">{detailOrder.home_address}, {detailOrder.ward}, {detailOrder.district}, {detailOrder.city}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Tình trạng đơn hàng: </p>
                            <p className="mx-4 text-white bg-red-600 p-2 rounded-xl font-bold">{detailOrder.status}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-gray-500 font-bold my-4">Thời gian đặt hàng:  </p>
                            <p className="mx-4 text-gray-700">{formattedTime}</p>
                        </div>
                    </div>
                    <div className="col-span-3 h-fit">
                        <div className='h-[60px] w-full grid grid-cols-8 gap-4 items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                            <div className='col-auto'>

                            </div>
                            <div className="col-span-3">

                            </div>
                            <div>
                                <span className='col-span-3'>Số Lượng</span>
                            </div>
                            <div className='col-span-2'>
                                <span className='ml-16'>Thành Tiền</span>
                            </div>
                        </div>
                        <div>
                            {listItemCart.map((item, index) => {
                                const priceAfterDiscount = item.price - item.discount_price
                                return (
                                    <div key={item._id} className='grid grid-cols-8 gap-4 mt-10 items-center'>
                                        
                                        <div className='col-span-auto'>
                                            <img className="object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48 "
                                                src={item.image} alt='' />
                                        </div>
                                        <Link to={`/product/${item._id}`} className='flex flex-col justify-center items-start col-span-3 '>
                                            <div className='my-4 text-gray-500 hover:text-gray-900 hover:underline'>
                                                {item.title}
                                            </div>
                                            <div className=" flex items-center justify-start">
                                                <h2 className="text-xl font-bold text-red-800">{formattedNumber(priceAfterDiscount)} đ</h2>
                                            </div>
                                            <div className=' relative '>
                                                <h2 className='text-sm text-gray-500'>{formattedNumber(item.price)} đ</h2>
                                                <div className="absolute h-[1px] bg-black w-[75px] top-[10px]"></div>
                                            </div>
                                        </Link>
                                        <div className="col-span-1 flex justify-center items-center">
                                            <p>{quantity[index]}</p>
                                        </div>
                                        <div className='col-span-2 ml-8'>
                                            <h2 className="text-xl items-center flex justify-center font-bold text-red-800">{formattedNumber(priceAfterDiscount * quantity[index])} đ</h2>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DetailOrder