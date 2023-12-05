import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../Contexts/productContext';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../Contexts/categoryContext';
import Popup from '../Popup';
const EditProduct = () => {
    // const history = useNavigate()
    const { _id } = useParams()
    const { products, updateProduct, popup } = useContext(ProductContext)
    const { categories } = useContext(CategoryContext)
    const [newProduct, setNewProduct] = useState({
        title: '',
        author: '',
        image: '',
        price: 0,
        category_id: '',
        year: 0,
        isbn: '',
        description: ''
    });
    useEffect(() => {
        const product = products.find(item => item._id === _id);
        if (product) {
            setNewProduct({
                title: product.title || '',
                author: product.author || '',
                image: product.image || '',
                price: product.price || 0,
                category_id: product.category_id || '',
                year: product.year || 0,
                isbn: product.isbn || '',
                description: product.description || ''
            });
        }
    }, [products, _id]);
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProduct({
            ...newProduct,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(_id, newProduct)

        // history('/admin/product')
        // console.log(newProduct);
    }

    return (
        <div className='container mx-auto'>
            <Popup trigger={popup}>
                <div className="flex flex-col bg-green-400  p-4 rounded-xl justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span className="text-xl text-white font-bold">Cập nhật thành công</span>
                </div>
            </Popup>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-l to-red-600 from-sky-400">
                    Sửa sản phẩm
                </span>
            </h1>
            <form className=''>
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="w-full">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                            Tên sản phẩm
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Tên sản phẩm"
                            required=""
                            value={newProduct.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">
                            Tác giả
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Tác giả"
                            required=""
                            value={newProduct.author}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
                            Thumnail
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required=""
                            placeholder='URL'
                            value={newProduct.image}
                            onChange={handleChange}
                        />
                        <img
                            id="image-preview"
                            className="mt-2 w-[180px] h-[180px] max-w-full"
                            src={newProduct.image}
                            alt="Review"
                        />
                    </div>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="w-full">
                        <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900">
                            Năm xuất bản
                        </label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder=""
                            required=""
                            value={newProduct.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                            Giá
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            value={newProduct.price}
                            onChange={handleChange}
                            required=""
                        />
                    </div>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="w-full">
                        <label htmlFor="category_id" className="block mb-2 text-sm font-medium text-gray-900">
                            Thể loại
                        </label>
                        <select
                            id="category_id"
                            name="category_id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            value={newProduct.category_id}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Chọn thể loại</option>
                            {categories.map(category => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="isbn" className="block mb-2 text-sm font-medium text-gray-900">
                            Mã hàng hóa
                        </label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            value={newProduct.isbn}
                            onChange={handleChange}
                            required=""
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                        Mô tả
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        rows="8"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Write a product description here..."
                        value={newProduct.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="flex max-w-[160px] rounded-xl my-2 bg-gradient-to-tr from-red-600 to-orange-300  p-0.5 shadow-lg">
                    <button onClick={handleSubmit} className='flex-1 text-md text-red-600 hover:text-opacity-80 font-bold bg-white p-4 rounded-xl'>Cập nhật</button>
                </div>
            </form>
        </div>

    )
}

export default EditProduct