import React from 'react'
import {Link} from 'react-router-dom'
const CheckOut = () => {
    return (
        <div className="container mt-16 mx-auto overflow-hidden">
            <div className="grid grid-cols-7 mt-16  gap-4">
            <div className="col-span-3 bg-red-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
            <h2>Sản phẩm </h2>
            <div>
            <div className='col-span-1'>
                    <img className="object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48 "
                        src='' alt='' />
                </div>
                <Link to={`/product/`} className='flex flex-col justify-center items-start col-span-2 '>
                    <div className='my-4 text-gray-500 hover:text-gray-900 hover:underline'>
                        
                    </div>
                    <div className='text-md font-bold '>
                        đ
                    </div>
                </Link>
            </div>
            </div>
            <div className="col-span-4 bg-blue-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
        form payment
            </div>
            </div>       
        </div>
    )
}

export default CheckOut