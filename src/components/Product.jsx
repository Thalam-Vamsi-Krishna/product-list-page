import React from "react";
import classes from "./Products.module.css";

const Product = ({ product, enteredKey, viewFormat }) => {
  return (
    <div className={viewFormat ? classes.inner_grid : classes.inner_list}>
      <div className={classes.productContainer}>
        <div className={classes.productBadge}>{product.product_badge}</div>
        <img src={product.product_image} alt="product_logo" width="150px" />
      </div>
      <div className={classes.details}>
        <h3>{product.product_title}</h3>
        <div className={classes.variants}>
          {product.product_variants.map((variant, index) => (
            <div key={index}>
              {variant.v1 && (
                <p
                  className={
                    enteredKey && variant.v1.includes(enteredKey)
                      ? classes.highlight
                      : null
                  }
                >
                  {variant.v1}
                </p>
              )}
              {variant.v2 && (
                <p
                  className={
                    enteredKey && variant.v2.includes(enteredKey)
                      ? classes.highlight
                      : null
                  }
                >
                  {variant.v2}
                </p>
              )}
              {variant.v3 && (
                <p
                  className={
                    enteredKey && variant.v3.includes(enteredKey)
                      ? classes.highlight
                      : null
                  }
                >
                  {variant.v3}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
