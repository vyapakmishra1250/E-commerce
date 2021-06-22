import React ,{ useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import '../Styles/cart.css';
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from '../Components/Item';
import  Pdata from '../Data/Pdata';
import { NavLink } from "react-router-dom";


const Cart = (props) => {
  useEffect(() => {
    document.title = `Cart`;
      });
  const [totalAmount, setTotalAmount] = useState(0);

  // setTotalAmount(()=>{
     

  //    })

  
  return (
    <>
      <header>
        <div className="continue-shopping">
          <NavLink to="/">
            <img
              src="https://img.icons8.com/ios/452/long-arrow-left.png"
              alt="arrow"
              className="arrow-icon"
            />
          </NavLink>
          <h3>continue shopping </h3>
        </div>
        <div className="cart-icon">
          <ShoppingCartIcon />
          {/* <p> 7 </p> */}
        </div>
      </header>
      <section className="main-cart-section">
        <h1 className="text-center"> shopping Cart </h1>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {
                Pdata.map((curItem) => {
                  return <Item key={curItem.id}{...curItem}/>
                })
                //LapData.map((curItem) => {
                //return <Item key={curItem.id} {...curItem}/>
                //}),
                //Eldata.map((curItem) => {
                //   return <Item key={curItem.id} {...curItem}/>
                //})
              }
            </Scrollbars>
          </div>
        </div>
        <div className="card-total text-center">
          <h3>
            Cart Total: <span>{totalAmount} </span>
          </h3>
          <NavLink to="/orderdone" class="btn">
              Place Order
            </NavLink>
        </div>
      </section>
    </>
  );
};

export default Cart;
