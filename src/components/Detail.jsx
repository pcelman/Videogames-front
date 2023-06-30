import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanFilter } from "../redux/actions";
import getTypeColor from "../styles/getTypeColor.js";
import "../styles/detail.css";

export default function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const myCharacter = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id))
      .then(() => setIsLoading(false))
      .catch((error) => {
        // console.log("Error fetching data:", error);
        setIsLoading(false);
      });
    return () => {
      dispatch(cleanFilter());
    };
  }, [dispatch, id]);
  const typeNames =
    myCharacter.length > 0 ? myCharacter[0].types.map((type) => type.name) : [];
  const typeColors = getTypeColor(typeNames);

  return (
    <div className="detail">
      <div className="">
        {/* <div className="card-detail"> */}
        {isLoading ? (
          <div className="progress-loader">
            <div className="progress"></div>
          </div>
        ) : myCharacter.length > 0 ? (
          <div className="detail__card">
            <img
              src={
                myCharacter[0].img ? myCharacter[0].img : myCharacter[0].image
              }
              className="detail__image"
              alt="image not submitted"
              width="auto"
              height="290px"
            />
            <h1 className="detail__name">{myCharacter[0].name}</h1>
            <section className="detail__hp">
              <div className="detail__hp--bg">
                <div
                  className="detail__hp--color"
                  style={{ width: `${(myCharacter[0].hp / 255) * 100}%` }}
                />
              </div>
              <p>hp</p>
            </section>
            <section className="detail__info--row1">
              <div className="detail__item">
                <h2>{myCharacter[0].attack}</h2>
                <p>Attack: </p>
              </div>
              <div className="detail__item">
                <h2>{myCharacter[0].defense}</h2>
                <p>Defense</p>
              </div>
              <div className="detail__item">
                <h2>{myCharacter[0].speed}</h2>
                <p>Speed</p>
              </div>
            </section>

            <section className="detail__info--row2">
              <div className="detail__item">
                <h2>{myCharacter[0].height}</h2>
                <p>Height</p>
              </div>
              <div className="detail__item">
                <h2>{myCharacter[0].weight}</h2>
                <p>Weight </p>
              </div>
            </section>
            <hr className="detail__line" />
            <section className="detail__types">
              {myCharacter[0].types.map((e, index) => (
                <p
                  className="detail__type"
                  style={{ backgroundColor: typeColors[index] }}
                  key={e.id}
                >
                  {e.name}
                </p>
              ))}
            </section>
            {/* <p> Type</p> */}
          </div>
        ) : null}

        <div className="detail__back">
          <Link to="/home">
            <button className="detail__button">BACK</button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}
