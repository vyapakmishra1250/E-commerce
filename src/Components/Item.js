import React, { useState } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';
    
const Items = (props) => {
     const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count +1);
    };
    const DecNum = () => {
        if(count===0 && count<=0){
            setCount(count);
            alert("Sorry Zero limit Reached");
        }else{
        setCount(count -1);
          }
    };
    return (
        <>
           <div className="items-info">

                <div className="product-img">
                    <img src={ props.imgsrc } alt="iamge" />
                </div>

                <div className="title">
                    <h2>{props.title}</h2>
                </div>

                <div className="add-minus-quantity">
                <Button onClick={DecNum} className="btn_green">
                <RemoveIcon/>
               </Button>  
                    <h5>{count}</h5>
                    <Button onClick={IncNum} className="btn_red">
                    <AddIcon/>
               </Button>
                </div>

                <div className="price">
                    <h4>{props.price*count}₹</h4>
                </div>

                <div className="remove-item">
                <Button onlclick={DecNum} className="btn"><RemoveShoppingCartIcon/></Button>
                </div>

         </div>

         <hr />  
        </>
    );
};

export default Items;