import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

export default function LandingPage() {
  return (
    <main className="landing">
      <h1 className="landing__title">
        MY <br />
        VIDEO <br />
        GAME
      </h1>
      {/* <h2 className="landing__subtitle">Create</h2>
      <h2 className="landing__subtitle">click on a card to start!</h2> */}

      <section className="landing__cards">
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
