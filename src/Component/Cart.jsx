import React from "react";
import { connect } from "react-redux";
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h2 className="d-flex justify-content-center">Cart Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <div>
                  <div>
                    <img
                      src={item.image1}
                      alt=""
                      height="200px"
                      width="200px"
                    />
                  </div>
                  <div className="fw-bold d-flex align-item-center justify-content-center">
                    <span>Name: {item.title}</span>
                    <span>Price: ${item.new_price}</span>
                    <span>Quantity: {item.qty}</span>
                    <span>Total: ${item.new_price * item.qty}</span>
                    <button className="btn btn-outline-dark">Buy</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.HandleCart,
  };
};

export default connect(mapStateToProps)(CartPage);