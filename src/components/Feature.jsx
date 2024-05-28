import React from 'react';
import { AiOutlineUsergroupAdd, AiOutlineEnvironment, AiOutlineShopping, AiOutlineCalendar } from 'react-icons/ai';
import '../styles/feature.css';

const Feature = () => {
    return (
        <div className="feature container mt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100 p-4 p-md-5 border d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <AiOutlineUsergroupAdd className="icon" size={40} />
                            <p className="fs-2 fw-semibold ms-2 mb-0">People</p>
                        </div>
                        <div className="text-start mt-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="fw-normal">
                                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
                            </p>
                            <button   id='feature-btn'type="button" className="btn btn-outline-primary fw-medium mt-2 align-self-start">Connect</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4 p-md-5 border d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <AiOutlineEnvironment className="icon" color='green' size={40} />
                            <p className="fs-2 fw-semibold ms-2 mb-0">Place</p>
                        </div>
                        <div className="text-start mt-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="fw-normal">
                                Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
                            </p>
                            <button   id='feature-btn'type="button" className="btn btn-outline-primary fw-medium mt-2 align-self-start">Meet up</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4 p-md-5 border d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <AiOutlineShopping className="icon" color='brown' size={40} />
                            <p className="fs-2 fw-semibold ms-2 mb-0">Product</p>
                        </div>
                        <div className="text-start mt-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="fw-normal">
                                Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
                            </p>
                            <button   id='feature-btn'type="button" className="btn btn-outline-primary fw-medium mt-2 align-self-start">Get it</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4 p-md-5 border d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <AiOutlineCalendar className="icon" color='blue' size={40} />
                            <p className="fs-2 fw-semibold ms-2 mb-0">Programme</p>
                        </div>
                        <div className="text-start mt-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="fw-normal">
                                Find events, meetups and workshops related to your hobby. Register or buy tickets online.
                            </p>
                            <button  id='feature-btn' type="button" className="btn btn-outline-primary fw-medium mt-2 align-self-start">Attend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
