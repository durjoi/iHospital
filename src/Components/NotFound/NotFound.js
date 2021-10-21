import React from 'react';
import notFound from '../../notFound.png';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;