import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);

  const userstate = useSelector((state) => state.loginUserReducer);

  const dispatch = useDispatch()

  const { currentUser } = userstate;

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LA BOTTEGA RESTAURANT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentUser.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                    <Dropdown.Item href="" onClick={()=>{dispatch(logoutUser())}}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  CART : {cartstate.cartItems.length} Items
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
