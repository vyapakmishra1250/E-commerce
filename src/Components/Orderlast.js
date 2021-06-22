import React from 'react';
import '../Styles/LastOrderdone.css';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';

const Orderlast = () => {
    return (
        <>
          <div className="final-touch">
              <h1>Thank you for visiting us See you soon</h1>
              <NavLink to="/"><button>Go Back<HomeIcon/></button></NavLink>
          </div>  
        </>
    )
}

export default Orderlast;
