import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Contexts/productContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
    <App />
    </ProductProvider>
);
