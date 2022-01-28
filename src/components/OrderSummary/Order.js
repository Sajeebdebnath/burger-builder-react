import React, {useEffect} from 'react';
import { connect } from "react-redux";
import OrderDetails from './OrderDetails';
import { Container,Row, Col } from 'reactstrap';
import { fetchOrdersAll } from '../../redux/actions/BurgerBuilderAction';
import Spiner from '../Spiner/Spiner';
import "../OrderSummary/OrderDetails.css"


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
    console.log(props)
    useEffect(() => {
        props.fetchOrders()
      },[]);

    
    let order_summary = null;

    if(props.orderError){
        order_summary = <p className='order-status'>Sorry, Database Error.</p>
    }else{
        if(props.orders.length === 0){
            order_summary = <p className='order-status'>Previously, You have no Orders.</p>
        }else{
            order_summary = props.orders.map((item) => {
                return (
                    <OrderDetails key={item.id} order={item}></OrderDetails>
                );
            })
        }
    }
    

    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col md={{size:"8", offset: "2"}}>
                        {props.orderLoad ? <Spiner></Spiner> : order_summary}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps) (Order);