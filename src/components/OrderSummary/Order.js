import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchOrdersAll } from '../../redux/actions/BurgerBuilderAction';


function mapStateToProps(state) {
    return {
        orders : state.orders,
        orderLoad : state.orderLoad,
        orderError : state.orderError
    };
  }
const mapDispatchToProps = (dispatch) =>{
    return {
      fetchOrders : () => dispatch(fetchOrdersAll())
    }
  }


const Order = (props) => {

    useEffect(() => {
        props.fetchOrders()
      },[]);

    console.log(props)

    const order_summary = props.orders.map((item) => {
        return (
            <p>{item.price}</p>
        );
    })

    return (
        <div>
            {order_summary}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps) (Order);