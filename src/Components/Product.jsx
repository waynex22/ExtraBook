import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'flowbite-react'
import {formattedNumber} from '../utils/formatteNumber'
const Product = ({ product }) => {
    const { _id, image, title, price, review_count, average_score , discount_price } = product
    const rating = average_score / 2
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const percentPrice = (discount_price / price) * 100
    const priceAfterDiscount = price - discount_price
    return (
        <div className=" mt-4 mx-4 col-span-1">
            <Link to={`/product/${_id}`} className=" mt-4 bg-white  rounded-lg  md:flex-row md:max-w-xl">
                <img className="object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48 transition duration-300 ease-in-out hover:scale-110 md:rounded-none md:rounded-l-lg"
                    src={image} alt={title} />
                <div className="p-4">
                    <h5 className="mb-2 text-md font-bold-light tracking-tight hover:underline text-gray-600 h-[85px]">{title}
                    </h5>
                    <div className=" flex items-center justify-start">
                        <h2 className="text-xl font-bold text-red-800">{formattedNumber(priceAfterDiscount)} đ</h2>
                        <div className="ml-4 px-2 bg-red-600 text-white rounded-md font-bold">{Math.round(percentPrice)}%</div>
                    </div>
                    <div className=' relative '>
                        <h2 className='text-sm text-gray-500'>{formattedNumber(price)} đ</h2>
                        <div className="absolute h-[1px] bg-black w-[75px] top-[10px]"></div>
                    </div>
                </div>
                <div className="flex items-start ml-3">
                    <Rating>
                        {filledStars.map((star, index) => (
                            <Rating.Star key={index} />
                        ))}
                        {Array.from({ length: 5 - rating }, (_, index) => (
                            <Rating.Star key={rating + index} filled={false} />
                        ))}
                    </Rating>
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        ({review_count})</p>
                </div>
            </Link >
        </div >
    )
}

export default Product