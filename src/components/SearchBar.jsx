import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../actions/index";
import "../styles/searchBar.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameVideogames(name));
    setCurrentPage(1);
    setName(""); 
  }

  return (
    <div className="search">
      <div className="search__area">
        <input
          className="search__input"
          type="text"
          placeholder="search..."
          value={name} 
          onChange={handleInputChange} 
        />
        <button
          className="search__button"
          type="submit"
          onClick={handleSubmit} 
          disabled={!name}
        >
          Search
        </button>
      </div>
    </div>
  );
}
