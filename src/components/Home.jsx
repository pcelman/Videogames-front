import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getGenre,
  savePage,
  getPlatforms,
} from "../actions/index.js";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Card from "./Card";
import Pg from "./Pg";
import jpg from "../images/placeHolder.jpg";
import notF from "../images/notF.png";
import "../styles/home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const videogamesFilter = useSelector((state) => state.videogamesFilter);
  const allVideogames = useSelector((state) => state.videogames);
  const status = useSelector((state) => state.status);
  const pages1 = useSelector((state) => state.pages);
  const platforms = useSelector((state) => state.platforms);

  const videogames = useSelector((state) => state.videogames);

  //page numbers:
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(pages1);
  const [videogamePerPage, setVideogamesPerPage] = useState(12);
  const indexOfLastVideogame = currentPage * videogamePerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage;
  const currentVideogames = videogamesFilter.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


useEffect(() => {
    dispatch(getGenre());
    setIsLoading(true); 
    dispatch(getVideogames())
      .then(() => setIsLoading(false)) 
      .catch((error) => {
        console.log("Error fetching data:", error);
        setIsLoading(false); 
      });
    dispatch(getPlatforms());
  }, [dispatch]);



  function handlePage(e) {
    dispatch(savePage(currentPage));
  }

  return (
    <main className="home">
      {/* ----------------navBar component -------------- */}
 
        <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
     

      {/* ----------------page numbers component------------ */}
      <div className="pg">
        <Pg
          videogamePerPage={videogamePerPage}
          videogamesFilter={videogamesFilter.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
      {/* -------------cards component--------------- */}
      <div className="home-cards">
        {isLoading ? (
              <div className="progress-loader">
              <div className="progress"></div>
            </div> 
        ) : videogamesFilter[0] === "no results" ? (
          <div className="home__noresults">
          <h2>No videogame with that name in our database</h2>
          <h2>Would you like to create it?</h2>
          {/* <button className="home__noresults__button">NEW</button> */}
          </div>
        ) : (
          currentVideogames?.map((e) => {
            return (
              <div className="home__card" key={e.id}>
                <Link
                  onClick={(e) => handlePage(e)}
                  to={`/detail/${e.id}`}
                >
                  <Card
                    key={e.id}
                    name={e.name}
                    image={e.image ? e.image : jpg}
                    genre={e.genres.map((e) => e.name)}
                    rating={e.rating}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
