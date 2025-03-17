import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(); // ✅ تعريف الـ form

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_u4jkaam',   
            'template_i3tali5',  
            form.current,
            'PfDqkzX9Ia-f0DpaA'    
        )
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            alert("✅ Your message has been sent successfully!");
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
        });
    };

    return (
        <section className="contact-section" id="contact">
            <Container>
                <h3 className="section-title">Contact Us</h3>
                <Row className="align-items-center">
                    {/* معلومات التواصل */}
                    <Col md={6} sm={12}>
                        <div className="contact-info">
                            <p><span>Email:</span> info@gmail.com</p>
                            <p><span>Phone:</span> 0121133133131</p>
                            <p><span>Address:</span> 23 Street, New York</p>
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='mmm'>
                                    <div className="input-group">
                                        <input type="text" name="name" placeholder="Your Name" required />
                                        <input type="text" name="company" placeholder="Company" />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Your Email" required />
                                        <input type="text" name="phone" placeholder="Phone" />
                                    </div>
                                </div>
                                <textarea name="message" placeholder="Your Message" required></textarea>
                                <button type="submit" className="custom-btn">Send Message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
