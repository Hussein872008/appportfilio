import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from "../assets/images/logo.png"
function Footer() {
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <Col md="4" sm="12">
                        <Link to="/">
                        <img src={Logo} alt=""  className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s"/>
                        </Link>
                    </Col>
                    <Col md="4" sm="12">
                        <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                            <Link to="/latest">Latest Builds</Link>
                            <Link to="/process">Process</Link>
                            <Link to="/service">Services</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/Projects">Projects</Link>
                        </div>
                    </Col>
                    <Col md="4" sm="12" className='iconsdiv'>
                    <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                        <Link to="#" target="_blank"><FacebookIcon /></Link>
                        <Link to="#" target="_blank"><InstagramIcon /></Link>
                        <Link to="#" target="_blank"><LinkedInIcon /></Link>
                        </div>
                    </Col>
                </Row>
                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p>© 2025 Hussein Abdalla</p>
                    <p>Email: info@shilohcreative.com</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer