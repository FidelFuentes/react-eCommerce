import React from "react";
import "../styles/ShoppingCart.scss";

const ShoppingCart = () => {
  return (
    <div>
      <aside className="product-detail">
        <div className="title-conteiner">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">My order</p>
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$3000,00</p>
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$3000,00</p>
          <img src="./icons/icon_close.png" alt="close" />
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$3000,00</p>
          <img src="./icons/icon_close.png" alt="close" />
        </div>

        <div className="order">
          <p className="articles">
            <span>Total</span>
          </p>
          <p className="total"> $9000.00</p>
        </div>
        <button className="primary-button add-to-card-button">Checkout</button>
      </aside>
    </div>
  );
};

export default ShoppingCart;
