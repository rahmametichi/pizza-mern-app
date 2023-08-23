import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const cartItems = cartstate.cartItems;
 var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div>
     
     <div className="row" style={{ marginLeft: "33px" }}>
        <div className="col-md-6">
          <h2 style={{fontSize :'40px'}}>My Cart</h2>
          {cartItems.map(item => {
            return (
              <div>
                <div className="flex-container">
                  <div className="text-left m-1 w-100">
                    <h1>
                      {item.name} [{item.varient}]
                    </h1>
                    <h1>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]}=
                      {item.price} USD
                    </h1>
                    <h1 style={{ display: "inline" }}>Quantity : </h1>
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    {item.quantity}
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>
                    <hr />
                  </div>

                  <div className="m-1 w-100">
                    <img
                      src={item.image}
                      alt=""
                      style={{ height: "120px", width: "120px" }}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <i
                      className="fa fa-trash mt-5"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    <div className="col-md-4 text-right" >
          
          <h2>Total  : {subtotal} USD</h2>
          <Checkout subtotal={subtotal}/>
        
          
        </div>
    </div>
    </div>
  );
        }
