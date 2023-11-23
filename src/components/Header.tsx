import React from "react";
import { Row, Col, Container, Nav} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'

const Header = (): JSX.Element => {
    let navigate = useNavigate();
return (
<div>
    <Container fluid>
    <Row className="nav_wrap">
        <Col>
        <Nav className="nav_title">
            <Nav.Link
            onClick={() => {
                navigate("/");
            }}
            >
            HOME
            </Nav.Link>
            <Nav.Link
            onClick={() => {
                navigate("/detail/1");
            }}
            >
            WOMAN
            </Nav.Link>
            <Nav.Link
            onClick={() => {
                navigate("/detail/10");
            }}
            >
            MEN
            </Nav.Link>
            <Nav.Link
            onClick={() => {
                navigate("/Cart");
            }}
            >
            CART
            </Nav.Link>
            <Nav.Link
            onClick={() => {
                navigate("/login");
            }}
            >
            LOGIN
            </Nav.Link>
            <Nav.Link href="#SERCH">
            <img
                src="/img/main_page/bn/loupe.png"
                style={{ width: "17px", height: "17px" }}
            />
            </Nav.Link>
        </Nav>
        </Col>
        <Col className="logo">
        <img src="/img/main_page/logo.png" />
        </Col>
        <Col></Col>
    </Row>
    </Container>
</div>
);
};

export default Header;
