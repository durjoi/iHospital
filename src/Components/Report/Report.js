import React from 'react';

const Report = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card" style={{ width:'30%' }}>
            <div className="card-body">
                <h5 className="card-title text-center">Check your Report</h5>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Enter Report Id </label>
                        <input type="text" className="form-control"/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Check Now</button>

                </form>
            </div>
        </div>

    </div>
    );
};

export default Report;