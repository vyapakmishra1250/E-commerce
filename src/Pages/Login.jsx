import React, { useState, useEffect } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        pass: '',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) =>{
         e.preventDefault();
         alert(
             `Your are login sucessfully`
         )
    }
    useEffect(() => {
        document.title = `Login`;
          });
    return(<>
    <div className="my-5">
        <h1 className="text-center">Login here</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                 <div className="mb-3">
                   <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                  <input className="form-control" id="exampleFormControlTextarea1" name="pass" value={data.pass} onChange={InputEvent} rows="3"></input>
                </div> 
                <div className="col-auto text-center mb-5">
                   <button type="submit" className="btn btn-outline-primary">login</button>
                </div>
                <div className="col-auto">
                </div>
                </form>
            </div>
        </div>
    </div>
    </>);
};

export default Login;