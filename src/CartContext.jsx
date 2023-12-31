import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const existingCart = JSON.parse(localStorage.getItem("myCart")) || [];
  const existingQtyInfo = JSON.parse(localStorage.getItem("qtyInfo")) || [];

  const [item, setItem] = useState(existingCart);
  const [size, setSize] = useState(existingCart.length);
  const [result, setResult] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [price, setPrice] = useState(0);
  const [log, setLog] = useState([]);
  const [itemCount, setItemCount] = useState(1);
  const [qty, setQty] = useState(1);
  const [qtyId, setQtyId] = useState(0);
  const [user, setUser] = useState("");
  const [qtyInfo, setQtyInfo] = useState(existingQtyInfo);

  const increment = (value) => {
    setItem((prevItem) => [...prevItem, value]);
  };

  useEffect(() => {
    saveToLocalStorage();
    setSize(item.length);
  }, [item]);

  const saveToLocalStorage = () => {
    localStorage.setItem("myCart", JSON.stringify(item));
  };

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(item));
    localStorage.setItem("qtyInfo", JSON.stringify(qtyInfo));
  }, [item, qtyInfo]);

  const quantityItem = (productId, number) => {
    setQtyInfo((prevQtyInfo) => {
      const updatedQtyInfo = [...prevQtyInfo];
      const itemIndex = updatedQtyInfo.findIndex(
        (info) => info.id === productId
      );

      if (itemIndex !== -1) {
        updatedQtyInfo[itemIndex].qty = number;
      } else {
        updatedQtyInfo.push({ id: productId, qty: number });
      }

      return updatedQtyInfo;
    });
  };

  const decrement = (value) => {
    const removed = item.filter(function (elem) {
      return elem !== value;
    });

    setItem(removed);
  };

  const filterProducts = (arr, value, field, field2 = "") => {
    const filteredProducts = arr.filter(function (input) {
      return field2 == ""
        ? input[field] === value
        : Math.floor(input[field][field2]) === value;
    });
    setResult(filteredProducts);
  };

  const searchProducts = (arr, value) => {
    const searchArr = arr.filter(function (input) {
      return (
        input?.title?.toLowerCase().includes(value) ||
        input?.description?.toLowerCase().includes(value)
      );
    });
    setSearchFilter(searchArr);
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
          qtyInfo,
          setItem,
          setQtyInfo,
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
