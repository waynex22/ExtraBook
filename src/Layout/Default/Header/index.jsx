import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import LoginModal from '../../../Modal/LoginModal/login';
import Search from "../../../Components/Search";
import { AuthContext } from "../../../Contexts/authContext";
import { CartContext } from "../../../Contexts/cartContext";

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const {itemAmount} = useContext(CartContext)
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen- w-full container flex flex-wrap items-center justify-between mx-auto ">
                <Link to='/' className="flex justify-start">
                    <img src="https://imgv3.fotor.com/images/blog-richtext-image/CNN-Logo.png" className="h-[80px] w-full"
                        alt="Flowbite Logo" />
                </Link>
                <div className="flex relative md:order-2 items-center">
                    {/* cart */}
                    <Link to='/cart'>
                    <div className="flex items-center relative mr-8 justify-center h-10 w-10  text-gray-500  rounded-full group-hover:bg-red-500 cursor-pointer">
                    {itemAmount > 0 && (
                        <div className="absolute mb-8 ml-10 h-[20px] w-[20px] bg-red-600 rounded-full flex justify-center items-center text-white">{itemAmount}</div>
                        )}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6" 
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    </div>
                    </Link>
                    {user ? (
                        <div className="relative inline-block text-left">
                            <button
                                type="button"
                                onClick={() => setMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 border border-transparent text-base leading-6 font-medium  transition ease-in-out duration-150"
                            >
                                <p className="font-semi-bold mr-3">Tài khoản</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                                    <div className="rounded-md bg-white shadow-xs">
                                        <div className="py-1 cursor-pointer">
                                            <div className="flex flex-col pb-4 justify-center items-center">
                                                <p>Xin chào: {user.data.name}</p>
                                            </div>
                                            {user.data.role === 'admin' && (
                                                <Link to='/'
                                                    className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                                >
                                                    Quản lí Admin
                                                </Link>
                                            )}
                                            <Link to='/'
                                                className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                            >
                                                Thông tin cá nhân
                                            </Link>
                                            <Link to='/'
                                                className="block px-4 py-2  w-full text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                            >
                                                Lịch sử mua hàng
                                            </Link>
                                            <Link
                                                onClick={logout}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                            >
                                                Đăng xuất
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    ) : (
                        <LoginModal />
                    )}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <Search />
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