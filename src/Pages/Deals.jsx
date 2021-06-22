import React from 'react';
import Sdata from '../Data/DealOfDays';
import Cards from '../Components/Cards';
import '../Styles/Dod.css';


const Smartphone = () => {
    return(
    <>
    <div className="my-5">
       <h1>Deals of the day <span></span></h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        Sdata.map((val, index)=>{
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

export default Smartphone;