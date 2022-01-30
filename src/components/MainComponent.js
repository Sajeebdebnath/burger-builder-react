import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { auth_check } from '../redux/actions/AuthActions';
import { Routes, Route, Navigate} from "react-router-dom";
import BurgerBuilder from './BurgerBuilders/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './OrderSummary/Checkout/Checkout';
import Order from './OrderSummary/Order';
import Auth from './Auth/Auth'
import Logout from './Auth/Logout';


function mapStateToProps(state) {
    return {
        token : state.token,
        userId : state.userId,
    };
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      auth_check : () => dispatch(auth_check())
    }
  }

const MainComponent = (props) => {

    useEffect(() => {
        props.auth_check()
      },[]);


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
                <Route exact path="/logout" element={<Logout />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);