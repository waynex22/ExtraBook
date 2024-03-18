import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../Contexts/cartContext'
import { Link } from 'react-router-dom'
import {formattedNumber} from '../utils/formatteNumber'

const Cart = () => {
    const { cart, deleteAllCart, total, itemAmount ,totalAfterVat} = useContext(CartContext)
    // console.log(cart);
    return (
        <section className='container mx-auto h-screen my-16'>
            <h1 className='text-xl'>GIỎ HÀNG ({itemAmount} sản phẩm)</h1>
            <div className='flex justify-between w-full my-16 '>
                <div className=' w-[70%]  h-32'>
                    <div className='h-[60px] w-full grid grid-cols-8 gap-4 items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                        <div className='col-auto ml-4'>
                            <input className='p-3 rounded-md mr-4' type="checkbox" />
                        </div>
                        <div className='col-span-2'>
                            <span>Chọn tất cả ( {itemAmount} sản phẩm)</span>
                        </div>
                        <div>

                        </div>
                        <div>
                            <span className='ml-4'>Số Lượng</span>
                        </div>
                        <div className='col-span-2'>    
                            <span className='ml-16'>Thành Tiền</span>
                        </div>
                        <div></div>
                    </div>
                    {itemAmount > 0 && (
                        <div className='h-fit w-full my-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-4 rounded-lg'>
                            {cart.map(item => {
                                return <CartItem item={item} key={item._id} />  
                            })}
                        </div>
                    )}
                    {itemAmount === 0 && (
                        <div className='h-fit w-full flex flex-col justify-center items-center my-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-4 rounded-lg'>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
                            <h1 className='text-xl text-gray-400'>Chưa có sản phẩm trong giỏ hàng của bạn</h1>
                            <Link to='/shop' className='px-8 py-4 my-6 bg-red-800 cursor-move text-white font-bold rounded-xl'>
                                MUA SẮM NGAY
                            </Link>
                        </div>
                    )}
                    {itemAmount > 0 && (
                        <div onClick={deleteAllCart} className='flex mt-4 justify-end items-end w-full text-red-600 cursor-pointer'>
                            <p>Xóa tất cả</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className='w-[28%]  h-102  p-2  items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
                    <div className='mx-4 my-4'>
                        <div className='flex justify-between items-center'>
                            <span className='text-xl text-gray-600 '>Thành tiền</span>
                            <span className=' text-xl font-bold'>{formattedNumber(total)} đ</span>
                        </div>
                        <div className='h-[1px] my-4 w-full bg-gray-300'></div>
                        <span>VAT (3%)</span>
                        <div className='flex justify-between items-center'>
                            <span>Tổng số Tiền (gồm VAT)</span>
                            <span className='text-red-800 text-xl font-bold' >{formattedNumber((parseInt(totalAfterVat)))} đ</span>
                        </div>
                        {itemAmount === 0 && (
                            <Link  className='px-20 text-2xl py-6 flex justify-center items-center mt-10 bg-gray-300 cursor-context-menu text-white font-bold rounded-xl'>
                                <span> Thanh toán</span>
                            </Link>
                        )}
                        {itemAmount > 0 && (
                            <Link to='/checkout' className='px-20 text-2xl py-6 flex justify-center items-center mt-10 bg-red-800 cursor-move text-white font-bold rounded-xl'>
                                <span> Thanh toán</span>
                            </Link>
                        )}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Cart