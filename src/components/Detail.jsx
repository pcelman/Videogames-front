import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanFilter } from "../actions/index";
import "../styles/detail.css";
// import jpg from "./placeHolder.jpg"

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const videogames = useSelector((state) => state.videogames);

  console.log("genre:", detail[0]?.genres[0]?.name);
  const unGenero = detail[0]?.genres[0]?.name;

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanFilter());
    };
  }, [dispatch, id]);

  return (
    <main className="detail">
      <div className="">
        <div className="detail__container">
          {detail.length > 0 ? (
            <div className="detail__card">
              <div>
                <img
                  className="detail__image"
                  src={detail[0].image}
                  alt="image not submitted"
                  width="410px"
                  height="auto"
                />
              </div>

              <section className="detail__text">
                <h3 className="detail__title">{detail[0].name}</h3>

                <div className="detail__stars">
                  {/* {[...Array(Math.floor(detail[0].rating))].map((i) => (
                    <div key={i}>⭐</div>
                  ))} */}
                  {[...Array(Math.floor(detail[0].rating))].map((_, index) => (
  <div key={index}>⭐</div>
))}

                </div>
                <div className="detail__item">
                  <div className="detail__subtitle">Released:</div>
                  <p className="detail__content">
                    {detail[0].released || detail.createdAt}
                  </p>
                </div>
                <div className="detail__item">
                  <div className="detail__subtitle">Platforms: </div>
                  {detail[0].platforms ? (
                    <p className="detail__content">{` ${detail[0].platforms.join(
                      ", "
                    )}`}</p>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="detail__item">
                  <div className="detail__subtitle">Genres: </div>
                  <p className="detail__content">{`  ${detail[0].genres
                    .map((e) => e.name)
                    .join(", ")}`}</p>
                </div>
              </section>
              <div className="detail__description">{detail[0].description}</div>
              <div className="detail__back">
                <Link to="/home">
                  <button className="detail__button">Back</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="progress-loader">
              <div className="progress"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
