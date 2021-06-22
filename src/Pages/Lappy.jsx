import React, { useEffect } from 'react';
import LapData from '../Data/LapData';
import Pcard from '../Components/Pcard';

const Lappy = () => {
    useEffect(() => {
        document.title = `Products-Laptop`;
          });
    return(
    <>
    <div className="my-5">
       <h1 className="text-center">Laptop</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        LapData.map((val, index)=>{
                            return <Pcard
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
export default Lappy;