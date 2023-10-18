import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";
import list from "../assets/list.png";
import grid from "../assets/grid.png";
import ProductList from "./ProductList";

const ShowProducts = () => {
  const [enteredKey, setEnteredKey] = useState("");
  const [products, setProducts] = useState([]);
  const [viewFormat, setViewFormat] = useState(null);

  const listViewHandler = () => {
    setViewFormat(null);
  };

  const gridViewHandler = () => {
    setViewFormat("gridView");
  };

  const dataChangeHandler = (e) => {
    e.preventDefault();
    const data = e.target.value;
    setEnteredKey(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093"
        );
        if (!response.ok) {
          throw new Error("Failed to Fetch products!");
        }
        const loadedProducts = await response.json();
        setProducts(loadedProducts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.controls}>
        <input
          placeholder="Type something to search here..."
          value={enteredKey}
          onChange={dataChangeHandler}
        />
        <button onClick={listViewHandler}>
          <img src={list} alt="list_logo" className={classes.buttonIcon} />
        </button>
        <button onClick={gridViewHandler}>
          <img src={grid} alt="grid_logo" className={classes.buttonIcon} />
        </button>
      </div>
      <ProductList
        products={products}
        enteredKey={enteredKey}
        viewFormat={viewFormat}
      />
    </>
  );
};

export default ShowProducts;
