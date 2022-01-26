import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
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
                            <NavLink href="#">
                                Something
                            </NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;