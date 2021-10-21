import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({title, subtitle, image, id}) => {
    return (
        <div className="col-md-4 mt-2 mb-5">
            <div className="card">
                <img src={image} className="card-img-top" alt="" style={{height: '220px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <Link to={'/service/'+id}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;