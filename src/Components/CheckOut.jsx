import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Contexts/cartContext'
import { CheckoutContext } from '../Contexts/checkoutContext'
import { formattedNumber } from '../utils/formatteNumber'
import { AuthContext } from '../Contexts/authContext'
import Popup from './Popup'
const CheckOut = () => {
    const history = useNavigate()
    const { citys, selectedCity, setCity, districts, selectedDistrict, setDistrict, wards, selectedWard, setWard, insertOrder, popup } = useContext(CheckoutContext)
    const { cart, totalAfterVat, total, deleteAllCart } = useContext(CartContext)
    const [paymentMethod, setPaymentMethod] = useState('');
    const [products, setProducts] = useState([])
    const { id } = useContext(AuthContext)
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        home_address: '',
        account_id: '',
        payment: paymentMethod,
        products: products
    })
    const getProductInCart = () => {
        return cart.map((item) => ({
            product_id: item._id,
            quantity: item.amount
        }));
    }
    useEffect(() => {
        const objectProduct = getProductInCart()
        setProducts(objectProduct)
        setInfo((prevInfo) => ({
            ...prevInfo,
            payment: paymentMethod,
            products: objectProduct,
            account_id: id
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, paymentMethod,])

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const [isChecked, setIsChecked] = useState(true);
    useEffect(() => {
        if (selectedCity) {
            const selectedCityObject = citys.find(city => city.code === Number(selectedCity));
            if (selectedCityObject) {
                setInfo(prevInfo => ({
                    ...prevInfo,
                    city: selectedCityObject.name
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCity])
    useEffect(() => {
        if (selectedDistrict) {
            const selectedDistrictObject = districts.find(district => district.code === Number(selectedDistrict));
            if (selectedDistrictObject) {
                setInfo(prevInfo => ({
                    ...prevInfo,
                    district: selectedDistrictObject.name
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDistrict])
    useEffect(() => {
        if (selectedWard) {
            const selectedWardObject = wards.find(ward => ward.code === Number(selectedWard));
            if (selectedWardObject) {
                setInfo(prevInfo => ({
                    ...prevInfo,
                    ward: selectedWardObject.name
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedWard])
    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        insertOrder(info);
        setInfo({
            name: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        home_address: '',
        account_id: '',
        payment: '',
        products: ''
        })
        deleteAllCart();

        setTimeout(() => {
            history('/myorder')
        },1000)

    };
    // console.log(info);
    return (
        <div className="container mt-16 mx-auto relative">
            <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                <h2 className='mx-10 my-4 text-xl uppercase font-light'>Địa chỉ nhận hàng</h2>
                <div className='h-[1px] w-[98%] mx-auto bg-gray-400'></div>
                <form className='mx-10 w-[100%] flex flex-col justify-center items-center'>
                    <div className='flex mb-4 mt-8 items-center gap-4 w-full '>
                        <label htmlFor="name" className='col-span-2 w-[10%]'>Tên người nhận</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={info.name}
                            onChange={handleChange}
                            required=""
                            className='ml-4 border border-gray-300 col-span-4 rounded-lg w-[100%] max-w-[40%] '
                            placeholder='Nhập họ và tên người nhận hàng' />
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="email" className='col-span-2 w-[10%]'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={info.email}
                            onChange={handleChange}
                            required=""
                            className='ml-4 border border-gray-300 col-span-4 rounded-lg w-[100%] max-w-[40%] '
                            placeholder='Nhập địa chỉ email' />
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="phone" className='col-span-2 w-[10%]'>Số điện thoại</label>
                        <input
                            type="text"
                            id='phone'
                            name='phone'
                            value={info.phone}
                            onChange={handleChange}
                            required=""
                            className='ml-4 border border-gray-300 col-span-4 rounded-lg w-[100%] max-w-[40%] '
                            placeholder='Ví dụ 03992342**** 10 số' />
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="name" className='col-span-2 w-[10%]'>Quốc gia</label>
                        <input type="text" className='ml-4 border border-gray-300 col-span-4 rounded-lg w-[100%] max-w-[40%] ' disabled value='Việt Nam' required placeholder='' />
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="name" className='w-[10%]'>Tỉnh Thành Phố</label>
                        <select
                            id="city"
                            name="city"
                            className="border ml-4 border-gray-300 rounded-lg w-[100%] max-w-[40%]"
                            value={selectedCity}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value={info.city} disabled>Chọn Thành Phố</option>
                            {citys.map(city => (
                                <option key={city.code} value={city.code}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="name" className='w-[10%]'>Quận / huyện</label>
                        <select
                            id="district"
                            name="district"
                            className="border ml-4 border-gray-300 rounded-lg w-[100%] max-w-[40%]"
                            value={selectedDistrict}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option value="" disabled>Chọn quận huyện</option>
                            {districts.map(district => (
                                <option key={district.code} value={district.code}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex my-4 items-center gap-4 w-full '>
                        <label htmlFor="name" className='w-[10%]'>Phường Xã</label>
                        <select
                            id="ward"
                            name="ward"
                            className="border ml-4 border-gray-300 rounded-lg w-[100%] max-w-[40%]"
                            value={selectedWard}
                            onChange={(e) => setWard(e.target.value)}
                        >
                            <option value="" disabled>Chọn phường xã</option>
                            {wards.map(ward => (
                                <option key={ward.code} value={ward.code}>
                                    {ward.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex mt-4 mb-8 items-center gap-4 w-full '>
                        <label htmlFor="home_address" className='col-span-2 w-[10%]'>Địa chỉ nhận Hàng</label>
                        <input
                            type="text"
                            id='home_address'
                            name='home_address'
                            value={info.home_address}
                            onChange={handleChange}
                            required=""
                            className='ml-4 border border-gray-300 col-span-4 rounded-lg w-[100%] max-w-[40%] '
                            placeholder='Nhập địa chỉ nhận hàng' />
                    </div>
                </form>
            </div>
            <div className="container mt-16 mx-auto ">
                <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                    <h2 className='mx-10 my-4 text-xl uppercase font-light'>PHƯƠNG THỨC VẬN CHUYỂN</h2>
                    <div className='h-[1px] w-[98%] mx-auto bg-gray-400'>
                    </div>
                    <div className='flex items-center mx-10 my-4 justify-start'>
                        <input
                            type="radio"
                            className='text-red-600'
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)} />
                        <div className='ml-4'>
                            <span className='font-bold'>Giao hàng tiêu chuẩn : 31.000 đ</span>
                            <p className=''>Nhận hàng từ 3 - 4 ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-16 mx-auto ">
                <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                    <h2 className='mx-10 my-4 text-xl uppercase font-light'>PHƯƠNG THANH TOÁN</h2>
                    <div className='h-[1px] w-[98%] mx-auto bg-gray-400'>
                    </div>
                    <div className='flex items-center mx-10 my-4 justify-start'>
                        <input
                            type="radio"
                            value="VNPAY"
                            checked={paymentMethod === 'VNPAY'}
                            onChange={handlePaymentMethodChange}
                            className='text-red-600'
                        />
                        <div className='ml-4 flex items-center justify-start'>
                            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=10359" alt="" />
                            <p className='ml-4 text-sm text-gray-500'>VNPAY</p>
                        </div>
                    </div>
                    <div className='flex items-center mx-10 my-4 justify-start'>
                        <input
                            type="radio"
                            value="ATM"
                            checked={paymentMethod === 'ATM'}
                            onChange={handlePaymentMethodChange}
                            className='text-red-600'
                        />
                        <div className='ml-4 flex items-center justify-start'>
                            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayatm.svg?q=10359" alt="" />
                            <p className='ml-4 text-sm text-gray-500'>ATM / Internet Banking</p>
                        </div>
                    </div>
                    <div className='flex items-center mx-10 my-4 justify-start'>
                        <input
                            type="radio"
                            value="CASH"
                            checked={paymentMethod === 'CASH'}
                            onChange={handlePaymentMethodChange}
                            className='text-red-600'
                        />
                        <div className='ml-4 flex items-center justify-start'>
                            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=10359" alt="" />
                            <p className='ml-4 text-sm text-gray-500'>Thanh toán bằng tiền mặt khi nhận hàng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-16 mx-auto ">
                <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                    <h2 className='mx-10 my-4 text-xl uppercase font-light'>mã khuyến mãi / mã qùa tặng</h2>
                    <div className='h-[1px] w-[98%] mx-auto bg-gray-400'>
                    </div>
                    <p className='ml-10 text-gray-500 my-4'>Mã KM/Quà tặng</p>
                    <div className='flex items-center mx-10 my-4 justify-start'>
                        <div className='flex justify-between items-center'>
                            <input
                                type="text"
                                id='gifcode'
                                name='gifcode'
                                className='text-gray-400 w-[300px] text-center rounded-lg'
                                placeholder='Nhập mã khuyến mãi/Quà tặng'
                            />
                            <button className='bg-blue-500 ml-4 text-white rounded-lg p-2'>Áp dụng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-16 mx-auto ">
                <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                    <h2 className='mx-10 my-4 text-xl uppercase font-light'>Kiểm tra lại đơn hàng</h2>
                    <div className='h-[1px] w-[98%] mx-auto bg-gray-400'>
                    </div>
                    <div className='my-4'>
                        {cart.map(item => {
                            return (
                                <div key={item._id} className='grid grid-cols-8 w-full'>
                                    <img src={item.image} className='col-span-1 object-cover object-center w-full rounded-t-lg h-96 md:h-auto md:w-48' alt="" />
                                    <span className='col-span-4'>{item.title}</span>
                                    <div className='col-span-1'>
                                        <div className=" flex items-center justify-start">
                                            <h2 className="text-xl font-bold text-red-800">{formattedNumber(item.price - item.discount_price)} đ</h2>
                                        </div>
                                        <div className=' relative '>
                                            <h2 className='text-sm text-gray-500'>{formattedNumber(item.price)} đ</h2>
                                            <div className="absolute h-[1px] bg-black w-[75px] top-[10px]"></div>
                                        </div>
                                    </div>

                                    <span className='col-span-1'>{item.amount}</span>
                                    <span className='col-span-1 text-xl font-bold text-red-800'>{formattedNumber((item.price - item.discount_price) * item.amount)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-16 ">
                <div className='py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-fit w-full rounded-lg'>
                    <div className='flex flex-col justify-end items-end p-4'>
                        <div className='flex justify-between items-center w-[30%] my-2'>
                            <h3 >Thành tiền</h3>
                            <span>{formattedNumber(total)} đ</span>
                        </div>
                        <div className='flex justify-between items-center w-[30%] my-2'>
                            <h3 >Phí vận chuyển (Giao hàng tiêu chuẩn)</h3>
                            <span>31.000 đ</span>
                        </div>
                        <div className='flex justify-between items-center w-[30%] my-2'>
                            <h3 className='font-bold'>Tổng số tiền (gồm VAT)</h3>
                            <span className='text-red-800 font-bold text-xl'>{formattedNumber(totalAfterVat + 31000)} đ</span>
                        </div>
                    </div>
                    <Popup trigger={popup}>
                    <div className="flex flex-col bg-green-400 p-4 rounded-xl justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="text-xl text-white font-bold">Đặt hàng thành công</span>
                    </div>
                </Popup>
                    <div className='w-[100%] h-[1px] bg-gray-400 mx-auto'></div>
                    <div className='flex justify-between items-center'>
                        <Link to='/cart' className='m-4'>
                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <p className='text-md font-bold'>Quay lại giỏ hàng</p>
                            </div>
                        </Link>
                        <button onClick={handleSubmit} className='px-20 text-2xl py-4 m-4 flex justify-center items-center  bg-red-800 cursor-move text-white font-bold rounded-xl' >Xác nhận thanh toán</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CheckOut