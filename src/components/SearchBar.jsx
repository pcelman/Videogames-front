import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../redux/actions.js";
import "../styles/searchbar.css";
import { BsSearch } from "react-icons/Bs";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function hanldeInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCharacters(name));
    setName("");
    setCurrentPage(1);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Pokemon name..."
        value={name}
        onChange={(e) => hanldeInputChange(e)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleSubmit} disabled={!name}>
        <BsSearch size={20} />
      </button>
    </div>
  );
}
