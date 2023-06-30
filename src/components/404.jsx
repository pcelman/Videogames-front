import React from "react";
import { Link } from "react-router-dom";
import "../styles/404.css";

export default function Home() {
  return (
    <div className="error">
      <p className="error__message">404 - Page Not Found</p>
      <Link to="/home">
        <button className="error__button">HOME</button>
      </Link>
      <section className="error__text">
        <ul className="error__404">
          <li className="error_4">4</li>
          <li className="error_0">0</li>
          <li className="error_4">4</li>
          <li className="error__mouth">{"("}</li>
        </ul>
      </section>
    </div>
  );
}
