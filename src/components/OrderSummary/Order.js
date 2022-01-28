import React, {useEffect} from 'react';
import { connect } from "react-redux";
import OrderDetails from './OrderDetails';
import { Container,Row, Col } from 'reactstrap';
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


    const order_summary = props.orders.map((item) => {
        return (
            <OrderDetails key={item.id} order={item}></OrderDetails>
        );
    })

    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col md={{size:"8", offset: "2"}}>
                        {order_summary}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps) (Order);