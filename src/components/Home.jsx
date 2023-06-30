import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getTypes } from "../redux/actions.js";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pg from "./Pg.jsx";
import NavBar from "./NavBar";
import "../styles/home.css";
 
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const charactersFilter = useSelector((state) => state.charactersFilter);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(12);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = charactersFilter.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getTypes());
    setIsLoading(true);
    dispatch(getCharacters())
      .then(() => setIsLoading(false))
      .catch((error) => {
        // console.log("Error fetching data:", error);
        setIsLoading(false);
        setIsLoading(true);
      });
  }, [dispatch]);

  return (
    <div className="home">
      <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <div className="filtros-home">
  
        <div className="home__cards">
          {isLoading ? (
            <div className="progress-loader">
              <div className="progress"></div>
            </div>
          ) : charactersFilter[0] === "no results" || currentCharacters.length === 0 ? (
            <div className="home__noresults">
<h2>No Pokémon with that characteristic in our database</h2>
<h2>Would you like to create one?</h2>
<Link to="/create">
<button className="landing__button">NEW</button></Link>
</div>
           
          ) : (
            currentCharacters.map((e) => (
              <div key={e.id}>
                <Link to={"/pokemon/" + e.id}>
                  <Card
                    name={e.name}
                    image={e.image ? e.image : e.otraImagen}
                    types={e.types}
                    types2={e.Types}
                    id={e.id}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <Pg
          charactersPerPage={charactersPerPage}
          charactersFilter={charactersFilter.length}
          paginado={paginado}
          currentPage={currentPage}
        />
    </div>
  );
  

}
