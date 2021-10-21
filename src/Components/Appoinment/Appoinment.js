import React from 'react';

const Appoinment = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card" style={{ width:'30%' }}>
            <div className="card-body">
                <h5 className="card-title text-center">Book an Appoinment</h5>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Speciality of Doctor </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Doctor Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Appoinment Date</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Request Now</button>

                </form>
            </div>
        </div>

    </div>
    );
};

export default Appoinment;