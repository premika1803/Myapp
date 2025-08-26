import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import SearchPage from '../SearchPage/SearchPage';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Cart from '../Cart/Cart';
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess';

const Configuration = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:id" element={<ProductDisplay />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Configuration;
