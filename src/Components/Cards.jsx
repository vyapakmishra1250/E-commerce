import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return(
    <>
      <div className="col-md-4 col-10 h-100 mx-auto">
       <div className="card h-100">
         <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
         <div className="card-body">
            <h2 className="card-title" >{props.title}</h2>
            <NavLink to="" className="btn">Buy Now</NavLink>
          </div>
        </div>
    </div>
    </>
    );
};

export default Card;