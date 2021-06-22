import React from 'react';
import Ddata from '../Data/Ddata';
import DealsOfDay from '../Components/DealsOfDay';



const MainDeals = () => {
    return(
    <>
    <div className="my-5">
       <h1 className="text-center">Today Offers Minimum 50% Off</h1>
    </div>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4" id="maincard">
                    {
                        Ddata.map((val, index)=>{
                            return <DealsOfDay
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                price={val.price}
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

export default MainDeals;