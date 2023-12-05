import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'flowbite-react'

const Product = ({ product }) => {
    const { _id, image, title, price, review_count, average_score } = product
    const rating = average_score / 2
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    const formattedPrice = price.toLocaleString().replace(/,/g, '.')
    return (
        <div className=" mt-4 mx-4 col-span-1">
            <Link to={`/product/${_id}`} className=" mt-4 bg-white  rounded-lg  md:flex-row md:max-w-xl">
                <img className="object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48 transition duration-300 ease-in-out hover:scale-110 md:rounded-none md:rounded-l-lg"
                    src={image} alt={title} />
                <div className="p-4">
                    <h5 className="mb-2 text-md font-bold-light tracking-tight text-gray-600 h-[85px]">{title}
                    </h5>
                    <h2 className=" text-1xl font-bold text-red-800 ">
                        {formattedPrice}đ
                    </h2>
                    <div className="flex items-start my-5">
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
                </div>
            </Link>
        </div>
    )
}

export default Product