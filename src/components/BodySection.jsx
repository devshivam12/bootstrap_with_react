import React from 'react';
import '../styles/bodysection.css';
import { FaGoogle, FaFacebook, FaLock } from 'react-icons/fa';

const BodySection = () => {
    return (
        <main className='main-body container-fluid'>
    <div className="container text-center p-3">
        <div className="row mt-md-5">
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="text-start">
                    <p className='fs-1 fw-semibold fst-italic'>Explore your <span>hobby</span> or <span>passion</span></p>
                    <div className='body-text'>
                        <p className='body-text fw-normal'>
                            Sign in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate, or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                            <br /><br />
                            If you are an expert or a seller, you can add your listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mt-5">
                <div className='container w-75'>
                    <div className="d-flex flex-row gap-3 gap-md-0 align-items-center justify-content-md-start">
                        <p className='sign-in fs-3 fw-semibold link-offset-3 mb-0'>Sign In</p>
                        <p className='join-in fw-semibold fs-3 mb-0'>Join In</p>
                    </div>
                    <div className='mb-3 mt-md-5 mt-5'>
                        <button type="submit" className="submit-btn btn d-flex align-items-center w-100 mb-3">
                            <FaGoogle className="me-3" />
                            <span className="icon-text-gap">Continue with Google</span>
                        </button>
                        <button type="submit" className="submit-btn btn d-flex align-items-center w-100">
                            <FaFacebook className="me-3" />
                            <span className="icon-text-gap">Continue with Facebook</span>
                        </button>
                    </div>
                    <form className='mb-3'>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-4 d-flex flex-row justify-content-between form-check">
                            <div className="d-flex align-items-center">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="mx-3 mb-0 form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <p className='mb-0 d-flex align-items-center'> <FaLock color='grey' /> Forgot Password</p>
                        </div>
                        <button type="submit" className="submit-btn btn w-100">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>


    );
}

export default BodySection;
