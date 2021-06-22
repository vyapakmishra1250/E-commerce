import React, {useEffect} from 'react';
import Eldata from '../Data/Eldata';
import Pcard from '../Components/Pcard';

const Electronics = () => {
    useEffect(() => {
        document.title = `Products-Electro`;
          });
    return(
    <>
    <div className="my-5">
       <h1 className="text-center">Electronics</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        Eldata.map((val, index)=>{
                            return <Pcard
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                            />
                        })
                    }
                </div> </div>
        </div>
    </div>
    </>
    );
};

export default Electronics;
