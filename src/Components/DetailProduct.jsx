import React, { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../Contexts/productContext"
import { CartContext } from '../Contexts/cartContext'
import Popup from "./Popup"
import { TEAnimation } from "tw-elements-react"
import { Rating } from 'flowbite-react'
import Loader from "./Loader"
import {formattedNumber} from '../utils/formatteNumber'
const DetailProduct = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }
    const { addToCart, popup } = useContext(CartContext)
    const { products } = useContext(ProductContext)
    const product = products.find(item => {
        return item._id === id
    })
    // console.log(cart)
    if (!product) {
        return <section className="h-screen flex justify-center items-center ">
            <Loader />
        </section>
    }   
    // console.log(percentPrice);
    const rating = product.average_score / 2
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const percentPrice = (product.discount_price / product.price) * 100
    const priceAfterDiscount = product.price - product.discount_price
    return (
        <section className="text-gray-700 body-font mt-16 ">
            <div className="container px-5 py-24 mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden bg-white">
                    <Popup trigger={popup}>
                        <div className="flex flex-col bg-green-400 p-4 rounded-xl justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            <span className="text-xl text-white font-bold">Thêm giỏ hàng thành công</span>
                        </div>
                    </Popup>
                <div className="lg:w-4/5 mx-auto flex">
                    <img alt="{product.title}" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src={product.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">XTRA</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <div className="flex items-start justify-start mb-5">
                        <Rating>
                            {filledStars.map((star, index) => (
                                <Rating.Star key={index}/>
                            ))}
                            {Array.from({ length: 5 - rating }, (_, index) => (
                                <Rating.Star key={rating + index} filled={false} />
                            ))}
                        </Rating>
                            <div className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">({product.review_count})</div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <div className="leading-relaxed flex">
                                    Nhà Cung Cấp: <div className="font-bold ml-2">XTRABOOK</div>
                                </div>
                                <div className="leading-relaxed my-4 flex">
                                    Nhà Xuất Bản: <div className="font-bold ml-2">NXB Thanh Niên</div>
                                </div>
                            </div>
                            <div>
                                <div className="leading-relaxed flex">
                                    Tác giả: <div className="font-bold ml-2">{product.author}</div>
                                </div>
                                <div className="leading-relaxed my-4 flex">
                                    Hình thức: <div className="font-bold ml-2">Bìa mềm</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-6 flex items-center">
                            <h2 className="text-2xl font-bold text-red-800">{formattedNumber(priceAfterDiscount)} đ</h2>
                            <div className="flex items-center ml-4">
                           <div className="w-[120px relative h-fit">
                           <h2 className="text-sm  font-bold text-gray-500">{formattedNumber(product.price)} đ</h2>
                           <div className="absolute h-[1px] bg-black w-[80px] top-[10px]"></div>
                           </div>
                            <div className="ml-4 p-2 bg-red-600 text-white rounded-lg font-bold">{Math.round(percentPrice)}%</div>
                            </div> 
                        </div>
                        <div className="flex flex-col w-[500px]">
                            <div className="flex mt-2">
                                <div>
                                    Thời gian giao hàng
                                </div>
                                <div className="ml-7 font-bold">
                                    Hên xui
                                </div>
                            </div>
                            <div className="flex my-2">
                                <div>
                                    Chính sách đổi trả
                                </div>
                                <div className="ml-10 font-bold">
                                    Đổi trả sản phẩm trong 30 ngày
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 mb-6">
                            <div className="text-xl text-gray-800 font-bold">Số lượng:</div>
                            <div className="ml-20 flex justify-between items-center h-[50px] rounded-xl w-[200px] bg-transparent border-solid border-2 border-gray-200">
                                <div onClick={decreaseQuantity} className="p-6 cursor-pointer hover:text-red-600 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                                <div>{quantity}</div>
                                <div onClick={increaseQuantity} className="p-6 cursor-pointer hover:text-blue-600 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <div className="flex max-w-sm rounded-xl">
                                <Link to='/cart' onClick={() => addToCart(product, id, quantity)} className='flex-1 font-bold text-md text-white bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl hover:text-red-200'>Mua ngay</Link>
                            </div>
                            <div className="flex max-w-sm rounded-xl ml-4 bg-gradient-to-tr from-red-600 to-orange-300  p-0.5 shadow-lg">
                                <button onClick={() => addToCart(product, id, quantity)} className='flex-1 text-md text-red-600 hover:text-opacity-80 font-bold bg-white p-4 rounded-xl'>Thêm giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden gap-4 h-fit mt-4">
                <div className="flex mx-4 my-4 justify-start items-center">
                    <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_coupon_red.svg?q=10341" alt="sale" />
                    <h1 className="font-bold text-gray-800 mx-2 text-xl">Mã giảm giá</h1>
                </div>
                <TEAnimation
                    animation="[fade-in-right_1s_ease-in-out]"
                    start="onLoad">
                    <div className="w-full bg-white grid grid-cols-3 ">
                        <div className="text-center flex my-4 mx-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-md p-1">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84.554" height="82.395" viewBox="0 0 104.554 125.395" className="cart2-svg-icon relative">
                                    <path id="Frame_icon_web" d="M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z" transform="translate(-1.501 0.499)" fill="#FFB323" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1"></path>
                                </svg>
                                <img className="absolute h-[30px] w-[30px]" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_promotion.svg?q=10341" alt="sale" />
                            </div>
                            <div className="mb-2 mt-2 flex flex-col items-start">
                                <h1 className="font-bold text-md">Mã giảm 10k</h1>
                                <div>Tất cả đơn hàng - loại hàng</div>
                                <div className="text-md text-gray-400 font-extralight">Áp dụng ngay khi nhập ngay</div>
                                <div className="font-bold text-md text-red-700">XTRA10K</div>
                            </div>
                        </div>
                        <div className="text-center flex my-4 mx-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-md p-1">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84.554" height="82.395" viewBox="0 0 104.554 125.395" className="cart2-svg-icon">
                                    <path id="Frame_icon_web" d="M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z" transform="translate(-1.501 0.499)" fill="#23C16B" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1"></path>
                                </svg>
                                <img className="absolute h-[30px] w-[30px]" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_freeship.svg?q=10341" alt="sale" />
                            </div>
                            <div className="mb-2 mt-2 flex flex-col items-start">
                                <h1 className="font-bold text-md">Mã miễn phí vận chuyển - 25k </h1>
                                <div>Đơn hàng tối thiếu 120k</div>
                                <div className="text-md text-gray-400 font-extralight">Áp dụng ngay khi nhập ngay</div>
                                <div className="font-bold text-md text-red-700">FREESHIP25</div>
                            </div>
                        </div>
                        <div className="text-center flex my-4 mx-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-md p-1">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84.554" height="82.395" viewBox="0 0 104.554 125.395" className="cart2-svg-icon">
                                    <path id="Frame_icon_web" d="M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z" transform="translate(-1.501 0.499)" fill="#48A7F8" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1"></path>
                                </svg>
                                <img className="absolute h-[30px] w-[30px]" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_ewallet.svg?q=10341" alt="sale" />
                            </div>
                            <div className="mb-2 mt-2 flex flex-col items-start">
                                <h1 className="font-bold text-md">Mã giảm 10% - Với ATM</h1>
                                <div>Áp dụng vơi các giao dịch bằng thẻ atm</div>
                                <div className="text-md text-gray-400 font-extralight">Sử dụng hay nhập mã</div>
                                <div className="font-bold text-md text-red-700">XTRABANK</div>
                            </div>
                        </div>
                        <div className="text-center">

                        </div>
                    </div>
                </TEAnimation>
            </div>
            <div className="container px-5 py-24 mt-6 mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white rounded-xl">
                <div className="w-full h-fit mx-4">
                    <h1 className="font-bold text-2xl text-gray-800">Thông tin sản phẩm</h1>
                    <div className="w-[600px]">
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Mã Hàng
                            </div>
                            <div>{product.isbn}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Tên nhà cung cấp
                            </div>
                            <div>Xtrabook</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Tác giả
                            </div>
                            <div>{product.author}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                NXB
                            </div>
                            <div>NXB Thanh Niên</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Năm Xuất Bản
                            </div>
                            <div>{product.year}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Ngôn Ngữ
                            </div>
                            <div>Tiếng việt</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Trọng Lượng(gr)
                            </div>
                            <div>650</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Kích Thước Bao bì
                            </div>
                            <div>23 x 18 cm</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="leading-relaxed text-gray-500 my-4">
                                Điểm Trung Bình
                            </div>
                            <div>{product.average_score}</div>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailProduct