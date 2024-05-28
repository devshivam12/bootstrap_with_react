import React from 'react';
import { FaSearch, FaCompass, FaStar, FaBookmark, FaBell, FaShoppingCart } from 'react-icons/fa';
import '../styles/nav.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg px-3">
            <div className="container-fluid">
                <p className="navbar-brand fs-2 fw-bolder fst-italic" style={{ color: "#0096C8" }}>
                    hobby<span style={{ color: '#8064A2' }}>cue</span>
                </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <form className="d-none d-lg-flex mx-auto" role="search" style={{ flex: '1 0 auto', maxWidth: '300px' }}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn search-btn btn-outline-success" type="submit"><FaSearch /></button>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="#">
                                <FaCompass size={25} color='#8064A2' /> Explore
                            </a>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaStar size={25} color='#8064A2' /> Hobbies
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#">
                                <FaBookmark size={25} color='#8064A2' />
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#">
                                <FaBell size={25} color='#8064A2' />
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#">
                                <FaShoppingCart size={25} color='#8064A2' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="sign-btn btn-outline-success py-2 px-4 mx-2" type="button">Sign In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
