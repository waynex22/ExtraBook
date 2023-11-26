import React from "react"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen- w-full container flex flex-wrap items-center justify-between mx-auto ">
                <Link to='/' className="flex justify-start">
                    <img src="https://imgv3.fotor.com/images/blog-richtext-image/CNN-Logo.png" className="h-[80px] w-full"
                        alt="Flowbite Logo" />
                </Link>
                <div className="flex md:order-2 items-center">
                    <Link to="/">
                        <button type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Đăng
                            Nhập
                        </button>
                    </Link>
                    
                    <button data-collapse-toggle="navbar-cta" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <div className="flex flex-start items-center">
                        <form action="/listBook/search" method="POST">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                </div>
                                <input type="search" id="default-search" name="search" 
                                    className="block w-[550px] p-2 pl-6 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 "
                                    placeholder="Nhập tên sách , isnb , tác giả ,...." required/>
                                    <button type="submit"
                                        className="text-white absolute right-3 bottom-1 bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-4 py-2">
                                        <svg className="w-10 h-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                            </div>
                        </form>
                    </div>
                    <ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link to='/'
                                className="block py-2 ml-7 pl-3 pr-4 text-gray-500 bg-red-700 hover:text-red-500 rounded md:bg-transparent md:p-0"
                                aria-current="page">Trang Chủ</Link>
                        </li>
                        <li>
                            <Link to="/shop"
                                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cửa hàng
                                
                            </Link>
                        </li>
                        <li>
                            <Link to="/news"
                                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sự
                                Kiện</Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Liên
                                hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header