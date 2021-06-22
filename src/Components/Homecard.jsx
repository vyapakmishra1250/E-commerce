import React from 'react';
import Cdata from './Cdata';
import Cards from './Cards';

const Service = () => {
    return(
    <>
    <div className="my-5">
       <h1 className="text-center">Brands</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        Cdata.map((val, index)=>{
                            return <Cards
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Service;