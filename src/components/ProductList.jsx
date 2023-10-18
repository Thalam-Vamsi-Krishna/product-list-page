import React from "react";
import Product from "./Product";
import classes from "./Products.module.css";

const ProductList = ({ products, enteredKey, viewFormat }) => {
  return (
    <div className={viewFormat ? classes.grid_format : classes.list_format}>
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          enteredKey={enteredKey}
          viewFormat={viewFormat}
        />
      ))}
    </div>
  );
};

export default ProductList;
