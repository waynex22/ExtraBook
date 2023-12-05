import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/cartContext'
const CartItem = ({ item }) => {
    const { removeFromCart, plusAmountItems, minusAmountItems } = useContext(CartContext)
    const { _id, title, image, price, amount } = item
    const priceAmount = price * amount
    const formattedPrice = price.toLocaleString().replace(/,/g, '.')
    const formattedPriceAmount = priceAmount.toLocaleString().replace(/,/g,'.')
    return (
        <section>
            <div className='grid grid-cols-8 gap-4 mt-10 items-center'>
                <div className='col-auto ml-4'>
                    <input className='p-3 rounded-md mr-4' type="checkbox" />
                </div>
                <div className='col-span-1'>
                    <img className="object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48 "
                        src={image} alt='' />
                </div>
                <Link to={`/product/${_id}`} className='flex flex-col justify-center items-start col-span-2 '>
                    <div className='my-4 text-gray-500 hover:text-gray-900 hover:underline'>
                        {title}
                    </div>
                    <div className='text-md font-bold '>
                        {formattedPrice} đ
                    </div>
                </Link>
                <div>
                    <div className="flex justify-between items-center h-[40px] rounded-xl w-[120px] bg-transparent border-solid border-2 border-gray-200">
                        <div onClick={() => minusAmountItems(_id)} className="p-2 cursor-pointer hover:text-red-500 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <div>{amount}</div>
                        <div onClick={() => plusAmountItems(_id)} className="p-2 cursor-pointer hover:text-blue-500 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h2 className="text-xl items-center flex justify-center font-bold text-red-800">{formattedPriceAmount} đ</h2>
                </div>
                <div onClick={() => removeFromCart(_id)} className='flex cursor-pointer hover:text-red-600 justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 p-6h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
            <div className='h-[1px] mt-4 bg-red-900 w-[90%] mx-auto'></div>
        </section >
    )
}
export default CartItem