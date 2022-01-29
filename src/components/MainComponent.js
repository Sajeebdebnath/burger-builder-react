import React from 'react';
import { connect } from "react-redux";
import { Routes, Route, Navigate} from "react-router-dom";
import BurgerBuilder from './BurgerBuilders/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './OrderSummary/Checkout/Checkout';
import Order from './OrderSummary/Order';
import Auth from './Auth/Auth'


function mapStateToProps(state) {
    return {
        token : state.token,
        userId : state.userId,
    };
  }

const MainComponent = (props) => {

    let routes = null;
    if(props.token === null){
        routes = (
            <Routes>
                <Route exact path="/login" element={<Auth />} />
                <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
        )
    }else{
        routes = (
            <Routes>
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/" element={<BurgerBuilder />} />
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        )
    }

    return (
        <div>
            <Header></Header>
            {routes}
        </div>
    );
};

export default connect(mapStateToProps)(MainComponent);