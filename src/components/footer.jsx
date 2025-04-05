import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from "../assets/images/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col md="4" sm="12" className="mb-3 mb-md-0">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="wow fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.5s"
                                style={{ width: '120px' }}
                            />
                        </Link>
                    </Col>

                    <Col md="4" sm="12" className="mb-3 mb-md-0">
                        <div className="footer-links wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                            <HashLink smooth to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#process">Process</HashLink>
                            <HashLink to="/#process">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                            <HashLink to="/#projects">Projects</HashLink>
                        </div>
                    </Col>

                    <Col md="4" sm="12" className="iconsdiv">
                        <div className="social-icons wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                            <Link to="#"><FacebookIcon /></Link>
                            <Link to="#"><InstagramIcon /></Link>
                            <Link to="#"><LinkedInIcon /></Link>
                        </div>
                    </Col>
                </Row>

                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p>© 2025 Hussein Abdalla</p>
                    <p>Email: info@shilohcreative.com</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
