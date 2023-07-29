import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setaIsinCart] = useState(false)

  function handleAddCart(){
    setaIsinCart(!isInCart)
  }

  const itemClass = isInCart ? "in-cart" : ` ""` 
  const itemText = isInCart ? "Remove from cart" : "Add to cart"
  const buttonClass = isInCart ? "remove" : "add"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddCart}>{itemText}</button>
    </li>
  );
}

export default Item;
