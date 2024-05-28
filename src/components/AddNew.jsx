import React from 'react';
import { GrAddCircle } from "react-icons/gr";
import '../styles/addnew.css'; // Import external CSS file

const AddNew = () => {
    return (
        <div className='container-fluid mb-5 mt-5 p-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card p-4 p-md-5 border"> 
                        <div className="d-flex flex-row align-items-center">
                            <GrAddCircle className="icon" color='blue' size={40} />
                            <p className="fs-2 fw-semibold ms-2 mb-0">Add your own</p>
                        </div>
                        <div className="text-start mt-3 mt-md-4">
                            <p className="fw-normal">
                                Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
                            </p>
                            <button type="button" id='feature-btn' className="btn btn-outline-primary mt-3 mt-md-4 fw-medium">Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNew;
