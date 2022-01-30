import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { authLogout } from '../../redux/actions/AuthActions'; 
import { Navigate } from 'react-router-dom';

const mapDispatchToProps = (dispatch) =>{
    return {
        authLogout : () => dispatch(authLogout())
    }
  }

const Logout = (props) => {
    useEffect(() => {
        props.authLogout()
      },[]);
    return (
        <div>
            <Navigate to="/" />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Logout);