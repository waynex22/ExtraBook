import React from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Contexts/productContext';
import CategoryProvider from './Contexts/categoryContext';
import AuthProvider from './Contexts/authContext';
import AccountProvider from './Contexts/accountContext';
import CartProvider from './Contexts/cartContext';
import CommentProvider from './Contexts/commentContext';
import CheckoutProvider from './Contexts/checkoutContext';
import OrderProvider from './Contexts/orderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <OrderProvider>
        <CheckoutProvider>
            <CommentProvider>
                <CartProvider>
                    <AccountProvider>
                        <AuthProvider>
                            <CategoryProvider>
                                <ProductProvider>
                                    <App />
                                </ProductProvider>
                            </CategoryProvider>
                        </AuthProvider>
                    </AccountProvider>
                </CartProvider>
            </CommentProvider>
        </CheckoutProvider>
    </OrderProvider>
);
