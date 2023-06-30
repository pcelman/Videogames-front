import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

export default function LandingPage() {
  return (
    <main className="landing">
      <section className="landing__overlay"></section>
      <section className="landing__text">
        <h2>Explore pokemons &</h2>
        <h1>MAKE YOUR OWN POKEMON CARD</h1>
        <h2>choose an image and create it´s own stats</h2>
        <Link to="/home">
          <button className="landing__button">START NOW</button>
        </Link>
      </section>
      <section className="landing__credits">
        <a className="landing__credits" href="https://paulacelman-portfolio.vercel.app/"> Developed by Paula Celman</a>
      </section>
    </main>
  );
}
