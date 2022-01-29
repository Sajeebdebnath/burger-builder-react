import React from 'react';
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import { Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import logo from "../../assets/images/logo.png"
import "../Header/Header.css"

function mapStateToProps(state) {
    return {
        token : state.token,
        userId : state.userId,
    };
  }

const Header = (props) => {
    let links = null;
    if(props.token === null){
        links = (
            <>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
            </>
        );
    }
    else{
        links = (
            <>
                <NavItem>
                    <NavLink to="/">Burger Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/order">Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/logout">Logout</NavLink>
                </NavItem>
            </>
        );
    }

    return (
        <div className='header'>
            <Container fluid>
                <Row>
                    <Col sm={{size:"3"}} xs={{size: "12"}}>
                        <div className="logo" style={{textAlign: "center"}}>
                            <NavLink to="/">
                                <img src={logo} alt="Burger King" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-sm-end align-items-center'>
                        <div className="header-menu">
                            <Navbar>
                                <Nav>
                                    {links}
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default connect(mapStateToProps)(Header);