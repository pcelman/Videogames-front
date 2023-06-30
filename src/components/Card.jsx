import React from "react";
import "../styles/card.css";

export default function Card({ name, image, genre, rating }) {
  // const star= <img src ={fStar}/>
  const star = "*";
  const index = Math.floor(rating);
  const croppedName = name.length > 25 ? name.substring(0, 17) + "..." : name;
 
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
    {/* <section className="card__text"> */}
      <div className="card__title">{croppedName}</div>
      <div className="card__genre">{genre.join(", ")}</div>
      <ul className="card__stars">
        {[...Array(Math.floor(rating))].map((_, i) => (
            <li key={i}>⭐</li>
            ))}
      </ul>
            {/* </section> */}
    </div>
  );
}
