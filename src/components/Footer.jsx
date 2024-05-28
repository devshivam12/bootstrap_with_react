import React from 'react';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import FooterImg from '../image-3.png';
import '../styles/footer.css';

const Footer = () => {
    const iconStyle = {
        backgroundColor: '#eee',
        borderRadius: '50%',
        padding: '8px',
        margin: '0 5px',
        display: 'inline-block'
    };

    return (
        <div className="footer">
            <div className="footer-comp w-100 text-center mb-4">
                <div className="container">
                    <div className='d-flex flex-column align-items-start'>
                        <h2 className='fst-italic fw-medium fs-2'>Your <span style={{ color : "#8064A2"}}>Hobby</span>, Your <span>Community</span></h2>
                        <button className='btn btn-primary mt-3'>Get Started</button>
                    </div>
                    <div className='mt-5 mb-5'>
                        <img src={FooterImg} className="img-fluid" alt="Footer Illustration" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-black">Hobbycue</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-black text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Our Services</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Work with us</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Faqs</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-black">How Do I</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-black text-decoration-none">Sign up</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Add a Listing</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Claim a Listing</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Post a Query</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Add a Blog Post</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Other Query</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-black">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-black text-decoration-none">Listing</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Blog Post</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Shop / Store</a></li>
                            <li><a href="#" className="text-black text-decoration-none">Community</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="text-black">Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div style={iconStyle}><FaFacebook color="black" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div style={iconStyle}><FaTwitter color="black" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div style={iconStyle}><FaInstagram color="black" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div style={iconStyle}><FaLinkedin color="black" /></div>
                            </li>
                        </ul>
                        <form className="form-inline mt-3 d-flex justify-content-center">
                            <input className="form-control mr-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit"><FaSearch /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center py-3">
                <div className="container">
                    <p>© {new Date().getFullYear()} Hobbycue. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
