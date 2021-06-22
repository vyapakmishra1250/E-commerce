import React, {useEffect} from 'react';
import Pdata from '../Data/Pdata';
import Pcard from '../Components/Pcard';


const Mobile = () => {
    useEffect(() => {
        document.title = `Products-Phones`;
          });
    return(
    <>
    <div className="my-5">
       <h1 className="text-center">Smartphone</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        Pdata.map((val, index)=>{
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

export default Mobile;