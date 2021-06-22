import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Deals.css';

const DealsOfDay = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="img" />
          <div class="card-body">
            <h2 class="card-title">{props.title}</h2>
            <p className="card-text">
              <small className="text-muted">Last updated a mins ago</small>
            </p>
            <h3 class="card-title">₹{props.price}</h3>
            <NavLink to="/cart" class="btn btn-success">
              Buy
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsOfDay;
