import React, { useContext } from 'react';
import { CategoryContext } from '../../../Contexts/categoryContext';
const Sidebar = () => {
    const { categories } = useContext(CategoryContext)
    return (
        <div className='bg-white h-fit w-[200px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl'>
            <h2 className='text-1xl py-4 mx-4 font-bold text-orange-700'>Danh mục</h2>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white ">
                {categories.map((item) => {
                   return <li key={item._id} className="w-full px-4 py-2 border-b border-orange-600 text-[14px]">{item.name}</li>
                })} 
                </ul>
           
        </div>
    )
}
export default Sidebar