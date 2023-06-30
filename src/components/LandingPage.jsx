import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import "../styles/landing.css";

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
 
 
      <div className="landing__cards">
        <Link to="/home">
          <div className="landing__flipcard">
            <div className="landing__flipcard-inner">
              <div className="landing__flipcard-front">
                <img
                  src={img1}
                  alt="goblin"
                  className="landing__card"
                  width="350px"
                  height="450px"
                />
              </div>
              <div className="landing__flipcard-back flip__1">
                <div className="flipcard__text">
                  <h3>Click </h3>
                  <h3>to </h3>
                  <h3>start </h3>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="landing__flipcard">
          <Link to="/home">
            <div className="landing__flipcard-inner">
              <div className="landing__flipcard-front">
                <img
                  src={img2}
                  alt="goblin"
                  className="landing__card"
                  width="350px"
                  height="450px"
                />
              </div>
              <div className="landing__flipcard-back flip__2">
                <div className="flipcard__text">
                  <h3>Click </h3>
                  <h3>to </h3>
                  <h3>start </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="landing__flipcard">
          <Link to="/home">
            <div className="landing__flipcard-inner">
              <div className="landing__flipcard-front">
                <img
                  src={img3}
                  alt="goblin"
                  className="landing__card"
                  width="350px"
                  height="450px"
                />
              </div>
              <div className="landing__flipcard-back flip__3">
                <div className="flipcard__text">
                  <h3>Click </h3>
                  <h3>to </h3>
                  <h3>start </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
