import React from 'react';
import {Link} from "react-router-dom"
import { Container, Row, Col, Navbar, NavLink, Nav, NavItem } from 'reactstrap';
import logo from "../../assets/images/logo.png"
import "../Header/Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="logo">
                            <NavLink href="#">
                                <img src={logo} alt="Burger King" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <div className="header-menu">
                            <Navbar>
                                <Nav>
                                    <NavItem>
                                        <Link to="/">Burger Builder</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/order">Orders</Link>
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