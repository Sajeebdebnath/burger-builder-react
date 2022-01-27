import React from 'react';
import {NavLink} from "react-router-dom"
import { Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import logo from "../../assets/images/logo.png"
import "../Header/Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="logo">
                            <NavLink to="/">
                                <img src={logo} alt="Burger King" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <div className="header-menu">
                            <Navbar>
                                <Nav>
                                    <NavItem>
                                        <NavLink to="/">Burger Builder</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/order">Orders</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;