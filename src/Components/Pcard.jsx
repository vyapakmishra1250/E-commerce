import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Pcard = (props) => {
const [item, setItem] = useState("");
const listOfItem = () => {
  setItem((prevVal) => {
    return [...prevVal, item];
  });
  setItem(" ");
};
    return(
    <>
    <div className="col-md-4 col-10 mx-auto">
     <div class="card" style={{width: "18rem"}}>
       <img src={props.imgsrc} class="card-img-top" alt="img"/>
       <div class="card-body">
         <h2 class="card-title">{props.title}</h2>
         <p class="card-text">{props.Desc}</p>
         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
         <NavLink to="/cart" class="btn btn-success"  onClick={listOfItem}>Add to Cart</NavLink>
       </div>
     </div>
     </div>
     
    </>);
};

export default Pcard;