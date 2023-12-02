import React from 'react';
import Header from '../Default/Header'
import Footer from '../Default/Footer';
import Sidebar from  './Sidebar'
const ShopLayout = ({children}) => {
    return (
        <div className="container mx-auto h-100vh">
            <Header />
            <div className='flex justify-between items-start'>
                <div className='py-16 mr-16'>
                <Sidebar />
                </div>
                <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl my-16'>
                {children}
                </div>  
            </div>
            <Footer />
        </div>
    )
}

export default ShopLayout