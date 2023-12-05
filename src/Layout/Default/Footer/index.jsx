import React from "react"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="container shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] mx-auto relative z-10 bg-white mt-10 rounded-lg pt-20 pb-10">
        <div className="container mx-auto h-fit">
            <div className="flex mx-10 flex-wrap ">
                <div className=" px-4 sm:w-2/3 lg:w-3/12">
                    <div className="h-fit top-0">
                        <Link to='/' className="mb-4 mt-[-20px] inline-block max-w-[160px]">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/774ba0fd-c421-4cba-9f2b-56b562cc850c/dad334l-85a94053-c912-42ee-b8b8-dce283ccf278.png/v1/fill/w_1600,h_900/byviruzz_xtra_watermark_by_flopperdesigns_dad334l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzc0YmEwZmQtYzQyMS00Y2JhLTlmMmItNTZiNTYyY2M4NTBjXC9kYWQzMzRsLTg1YTk0MDUzLWM5MTItNDJlZS1iOGI4LWRjZTI4M2NjZjI3OC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.h9EofU2LHb6WborFfv269nJvC2wnjEMHXpCgRHqeugk"
                                className="h-[100px]" alt="Extra Logo" />
                        </Link>
                        <p className="text-base text-body-color dark:text-dark-6 mb-7">
                            Tầng 3 : 15 Nguyễn Thị Bảy , Phường Thanh Khê Tây , Liên Chiểu , Đà Nẵng , Việt Nam
                        </p>
                        <p className="text-base text-body-color dark:text-dark-6 mb-7">
                            Hệ thống trên toàn quốc
                        </p>
                        <p className="text-base flex text-body-color dark:text-dark-6 mb-7">
                            Hotline
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            :0394630804
                        </p>
                        <p className="text-base flex text-body-color dark:text-dark-6 mb-7">
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            :khaipnpd07148@fpt.edu.vn
                        </p>
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Social Media</h2>

                            <div className="flex flex-wrap justify-start gap-2">
                                <button
                                    className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </button>

                                <button
                                    className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </button>

                                <button
                                    className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                                    </svg>
                                </button>

                                <button
                                    className="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                    </svg>
                                </button>

                                <button
                                    className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                            </path>
                                        </g>
                                    </svg>
                                </button>

                                <button
                                    className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-4 sm:w-1/2 lg:w-2/12">
                    <div className=" mb-10">
                        <h4 className="text-lg font-semibold text-dark  mb-9">
                            DỊCH VỤ
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Chính sách bảo mật thông tin cá nhân
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Chính sách bảo mật thanh toán
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Giới thiệu XTRABOOK
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" px-4 sm:w-1/2 lg:w-2/12">
                    <h4 className="text-lg font-semibold text-dark">
                        TÀI KHOẢN CỦA TÔI
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to='/'
                                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                Đăng nhập / tạo mới tài khoản
                            </Link>
                        </li>
                        <li>
                            <Link to='/'
                                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                Thay đổi địa chỉ khách hàng
                            </Link>
                        </li>
                        <li>
                            <Link to='/'
                                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                Chi tiết tài khoản
                            </Link>
                        </li>
                        <li>
                            <Link to='/'
                                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                Lịch sử mua hàng
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" px-10 lg:w-2/12">
                    <div className="mb-10">
                        <h4 className="text-lg font-semibold text-dark mb-9">
                            HỖ TRỢ
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Chính sách đổi trả - hoàn tiền
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Chính sách bảo hành - hoàn tiền
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Chính sách vận chuyển
                                </Link>
                            </li>
                            <li>
                                <Link to='/'
                                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                                    Phương thức thanh toán và xuất vat
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12 mb-10'>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Sun </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Mon </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all font-normal group-hover:font-semibold	duration-300'> Tue </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
                        </div>
                    </div>
                </div>

                <div className='flex group bg-red-600 shadow-lg dark-shadow rounded-full mx-1 cursor-pointer justify-center relative  w-16'>
                    <span className="flex h-2 w-2 absolute bottom-1.5 ">
                        <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-red-600 "></span>
                        <span className="relative inline-flex rounded-full h- w-3 bg-red-600"></span>
                    </span>
                    <div className='flex items-center px-4 my-2 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-100 text-sm font-semibold'> Wed </p>
                            <p className='text-gray-100  mt-3 font-bold'> 14 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Thu </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Fri </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-red-600 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div className='flex items-center px-4 py-4'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Sat </p>
                            <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <span className="absolute left-0 bottom-0 z-[-1]">
                    <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                            fill="url(#paint0_linear_1179_5)" />
                        <defs>
                            <linearGradient id="paint0_linear_1179_5" x1="76.5" y1="281" x2="76.5" y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3056D3" stopOpacity="0.08" />
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute top-10 right-10 z-[-1]">
                    <svg width="200" height="250" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                            fill="url(#paint0_linear_1179_4)" />
                        <defs>
                            <linearGradient id="paint0_linear_1179_4" x1="-1.63917e-06" y1="37.5" x2="75" y2="37.5"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#13C296" stopOpacity="0.31" />
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>
        </div>
    </div>
    )
}
export default Footer