import React from "react";
import getTypeColor from "../styles/getTypeColor.js";
import "../styles/card.css";

export default function Card({ name, image, types, id }) {
  const typeNames = types?.map((type) => type.name);
  const typeColors = getTypeColor(typeNames);

  return (
    <main className=" card">
      <section
        className=""
        // style={backgroundStyle}
      ></section>
      <section className="">
        <img src={image} alt={name} className="card__img" height="300px"/>
      </section>

      <section className=" card__info">
        <h1 className="card__name">{name}</h1>

        <h5>
          {types?.map((type, index) => (
            <p
              key={type.id}
              className="card__type"
              style={{ backgroundColor: typeColors[index] }}
            >
              {type.name}{" "}
            </p>
          ))}{" "}
        </h5>
        {/* <div className="card__number">
          Card <br />#{id}
        </div> */}
      </section>
    </main>
  );
}
