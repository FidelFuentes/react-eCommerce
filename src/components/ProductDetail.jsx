import React from "react";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>

      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />

      <div className="product-info">
        <p>$3000,00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          unde harum iusto sed? Iure, quaerat labore. Fuga, ut repellat. Debitis
          accusamus quisquam facilis ab repellat distinctio ullam voluptatum
          atque adipisci?
        </p>

        <button className="primary-button add-to-card-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" /> Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
