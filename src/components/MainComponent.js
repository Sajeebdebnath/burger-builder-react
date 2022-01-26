import React from 'react';
import { Routes, Route } from "react-router-dom";
import BurgerBuilder from './BurgerBuilders/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './OrderSummary/Checkout/Checkout';
import Order from './OrderSummary/Order';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>

            <Routes>
                <Route path="/order" element={<Order />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route exact path="/" element={<BurgerBuilder />} />
            </Routes>
        </div>
    );
};

export default MainComponent;