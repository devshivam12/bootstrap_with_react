import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoPlayCircleOutline } from "react-icons/io5";
import TestimonialImg from '../image-2.avif';
import '../styles/testimonial.css';

const Testimonials = () => {
    return (
        <div className="container mb-5 mt-5">
            <div className="card my-5 mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="card-body p-4 border" style={{ background: '#F7F5F9' }}>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <RiDoubleQuotesL className="icon" size={30} />
                        <p className="fs-3 fw-semibold ms-2 mb-0">Testimonials</p>
                    </div>
                    <div className="text-start mb-4">
                        <p className="fw-normal text-secondary">
                            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                        </p>
                    </div>


                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <div className="card bg-light w-75 mb-3 mb-md-0">
                            <div className="card-body d-flex flex-row flex-row align-items-center justify-content-between" style={{ background: '#CCC1DA' }}>
                                <IoPlayCircleOutline size={40} className="mb-3 mb-md-0" />
                                <input type="range" className="form-range w-75 custom-range ms-md-3" id="customRange1" />
                                <img src={TestimonialImg} className="testimonial-img" alt="Testimonial" />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <img src={TestimonialImg} className="testimonial-img-2" alt="Testimonial" />
                            <div className="testi-name ms-3">
                                <p className="mb-0">Shubha Nagrajan</p>
                                <p className="mb-0">Classical Dancer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
