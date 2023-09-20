import React, { useState, useContext, useEffect } from "react";
import "./Search.css";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const { searchProducts } = useContext(CartContext);

  const [type, setType] = useState("");
  const [element, setElement] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
      );
      const data = await res.json();
      setElement(data);
    })();
  }, []);

  const onInputChange = (e) => {
    setType(e.target.value);
    searchProducts(element, type);
  };
  const onClickChange = () => {
    navigate("/display-content");
    searchProducts(element, type);
    // console.log(type);
  };

  return (
    <div className="search-component">
      <div className="dropdown-div">
        <select className="dropdown">
          <option value="All">All</option>
          <option value="Alexa">Alexa</option>
          <option value="Books">Books</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search amazon.in"
          className="searchBox"
          value={type}
          onChange={onInputChange}
          onClick={onClickChange}
        />
      </div>
      <div className="searchbox-div">
        <div className="searchIcon" onClick={onClickChange}></div>
      </div>
    </div>
  );
};

export default Search;
