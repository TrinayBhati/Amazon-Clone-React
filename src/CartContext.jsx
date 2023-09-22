import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const existingCart =
    localStorage.getItem("myCart") != undefined
      ? JSON.parse(localStorage.getItem("myCart"))
      : [];
  const cardAmount = existingCart.length;
  const [item, setItem] = useState(existingCart);
  const [size, setSize] = useState(cardAmount);
  const [result, setResult] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [price, setPrice] = useState(0);
  const [log, setLog] = useState([]);
  const [itemCount, setItemCount] = useState(1);
  const [qty, setQty] = useState(1);
  const [qtyId, setQtyId] = useState(0);
  const [user, setUser] = useState("");

  const increment = (value) => {
    // console.log("value", value);

    // setItem((prevItem) => {
    //   if (existingCart == []) {
    //     return value;
    //   }
    //   return [...prevItem, value];
    // });
    setItem((prevItem) => [...prevItem, value]);
    // setSize(item.length + 1);
    // console.log(item);
  };
  useEffect(() => {
    saveToLocalStorage();
    setSize(item.length);
  }, [item]);
  // console.log("item", item);
  const saveToLocalStorage = () => {
    localStorage.setItem("myCart", JSON.stringify(item));
  };

  const decrement = (value) => {
    // const index = item.find(value);
    // console.log(index);
    // const removed = item.splice(index, 1);

    const removed = item.filter(function (elem) {
      return elem !== value;
    });

    // console.log("value", value);
    // console.log("items", item);
    // console.log("removed", removed);
    setItem(removed);
  };

  const filterProducts = (arr, value, field, field2 = "") => {
    const filteredProducts = arr.filter(function (input) {
      return field2 == ""
        ? input[field] === value
        : Math.floor(input[field][field2]) === value;
    });
    setResult(filteredProducts);
    // console.log("rating", result);
  };

  const searchProducts = (arr, value) => {
    const searchArr = arr.filter(function (input) {
      return (
        input?.title?.toLowerCase().includes(value) ||
        input?.description?.toLowerCase().includes(value)
      );
    });
    setSearchFilter(searchArr);
    // console.log(searchFilter);
  };

  const quantityItem = (product, number) => {
    // console.log("product", product);
    // console.log("number", number);
    setQty(number);
    setQtyId(product);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          item,
          size,
          increment,
          filterProducts,
          result,
          searchProducts,
          searchFilter,
          log,
          setLog,
          price,
          setPrice,
          decrement,
          quantityItem,
          qty,
          qtyId,
          user,
          setUser,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
