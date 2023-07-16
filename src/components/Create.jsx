import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  postCharacter,
  getTypes,
  getCharacters,
  cleanFilter,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import getTypeColor from "../styles/getTypeColor";
import "../styles/create.css";

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const characters = useSelector((state) => state.characters);




  const [input, setInput] = useState({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getCharacters());
    if (validate(input)) {
      setErrors(validate(input));
    }
    return () => {
      dispatch(cleanFilter());
    };
  }, []);

  let pattern =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  let reg_exImg = /.*(png|jpg|jpeg|gif)$/;

  function validate(input) {
    let errors = {};
    if (!pattern.test(input.image)) {
      errors.image = "You need to add a link";
    }
    if (!pattern.test(input.image)) {
      if (!reg_exImg.test(input.image)) {
        errors.image = "Link needs to end with jpeg, jpg, png, gif or bmp";
      }
    }
    if (!input.name) {
      errors.name = "Fill in the name";
    } else if (characters.find((e) => e.name === input.name)) {
      errors.name = "Name already exists";
    }
    if (input.types.length === 0) {
      errors.types = "Type is required";
    } else if (input.types.length > 2) {
      errors.types = "A pokemon can only have 1 or 2 types";
    }
    if (!input.life) {
      errors.life = "HP is required";
    }
    return errors;
  }



  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.types.length < 2 && !input.types.includes(e.target.value)) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          types: [...input.types, e.target.value],
        })
      );
    }
  }



  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postCharacter(input));
    setTimeout(() => {
      alert("Created!");
      setInput({
        name: "",
        types: [],
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
      });
      navigate("/home");
    }, 2000);
  }

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== e.target.value),
    });
  }

  const typeNames = input.types.map((e) => e.name);


  
  

  return (
    <div className="create">
      <div className="create__content">
        <h1 className="create__title"> Make your own pokemon</h1>
        <div className="create__back">
          <Link to="/home">
            <button className="create__button">BACK</button>
          </Link>
        </div>

        {/* ------------form------------ */}
            <form>
        <div className="form__main">
          <section className="form__create">
              <div className="form__item">
                <label className="form__label">Image: </label>

                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleInputChange}
                />
              </div>
              {errors.image && (
                <div className="form__error">{errors.image}</div>
              )}
              <div className="form__item">
                <label className="form__label">Name: </label>
                <input
                  placeholder="required"
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              {errors.name && <div className="form__error">{errors.name}</div>}

              <div className="form__item">
                <label className="form__label">Health Power: </label>
                <input
                  placeholder="integer from 1 to 255"
                  type="number"
                  value={input.life !== 0 ? input.life : ""}
                  name="life"
                  onChange={handleInputChange}
                />
              </div>
              {errors.life && <div className="form__error">{errors.life}</div>}
              <div className="form__item">
                <label className="form__label">Attack: </label>
                <input
                  type="number"
                  value={input.attack !== 0 ? input.attack : 0}
                  name="attack"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__item">
                <label className="form__label">Defense: </label>{" "}
                <input
                  type="number"
                  value={input.defense !== 0 ? input.defense : 0}
                  name="defense"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__item">
                <label className="form__label">Speed: </label>{" "}
                <input
                  type="number"
                  value={input.speed !== 0 ? input.speed : 0}
                  name="speed"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__item">
                <label className="form__label">Height: </label>{" "}
                <input
                  type="number"
                  value={input.height !== 0 ? input.height : 0}
                  name="height"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__item">
                <label className="form__label">Weight: </label>
                <input
                  type="number"
                  value={input.weight !== 0 ? input.weight : 0}
                  name="weight"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__item__select">
                <div className="form__label--types">
                  You may only choose up to two types
                </div>
                <select onChange={handleSelect}>
                  {" "}
                  {types.map((e) => (
                    <option value={e.name}>{e.name}</option>
                  ))}
                </select>
                <div className="form__select__types">
                  {/* <div>{input.types.map((e) => e, ", ")}</div> */}
                  {input.types.map((el) => (
                    <div className="form__select__type__plus__x">
                      <p> {el}</p>{" "}
                      <button
                        value={el}
                        className="botonX"
                        onClick={(el) => handleDelete(el)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
   
         
          </section>
          {/* ------------card---------------- */}
        
          <section className="form__card">
            {input.image && (
              <img
                src={input.image ?? input.image}
                className="form__card__image"
                alt="image not submitted"
                width="auto"
                height="290px"
              />
            )}

            <h1 className="form__card__name">{input.name}</h1>
            <section className="detail__hp">
      
              <div className="form__card__item">
              <p className="form__card__label">Health Power: &nbsp;</p>{" "}
              {input.life ? input.life : <div> </div>}
            </div>
        
            </section>
            <section className="form__card__info--row1">
              <div className="form__card__item">
                <h2>{input.attack ? input.attack : 0}</h2>
                <p>Attack: </p>
              </div>
              <div className="form__card__item">
                <h2>{input.defense ? input.defense : 0}</h2>
                <p>Defense</p>
              </div>
              <div className="form__card__item">
                <h2>{input.speed ? input.speed : 0}</h2>
                <p>Speed</p>
              </div>
            </section>

            <section className="form__card__info--row2">
              <div className="form__card__item">
                <h2>{input.height ? input.height : 0}</h2>
                <p>Height</p>
              </div>
              <div className="form__card__item">
                <h2>{input.weight ? input.weight : 0}</h2>
                <p>Weight </p>
              </div>
            </section>
            <hr className="form__card__line" />

            {/* <section className="form__card__item--type">
              <p className="form__card__label ">Type: &nbsp;</p>
              {input.types && (
                <>
                  {input.types.map((type, index) => (
                    <span className="form__card__label--types" key={type}>
                      {type}
                      {index !== input.types.length - 1 && <>,&nbsp; &nbsp;</>}
                    </span>
                  ))}
                </>

              )}
            </section> */}

<section className="form__card__item--type">
  <p className="form__card__label ">Type: &nbsp;</p>
  {input.types && (
    <>
      {input.types.join(", ")}
    </>
  )}
</section>

            <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={Object.keys(errors).length > 0}
                >
                  Create
                </button>
              </div>


          </section>
        </div>
          </form>
      </div>
    </div>
  );
}
