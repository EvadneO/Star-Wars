import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Detalle = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-3">
      <img
        src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
        id="imadetalle"
        style={{ heigth: "450px" }}
        alt="..."
      />
      <div className="card-body">
        <h1 className="card-title"><strong>{store.personaje[id]?.name}</strong></h1>
      <h5 className="card-title"><strong>Altura: </strong>{store.personaje[id]?.height}</h5>
      <h5 className="card-title"><strong>Masa: </strong> {store.personaje[id]?.mass}</h5>
      <h5 className="card-title"><strong> Color de Cabello: </strong> {store.personaje[id]?.hair_color}</h5>
      <h5 className="card-title"><strong>Color de Piel: </strong> {store.personaje[id]?.skin_color}</h5>
      <h5 className="card-title"><strong>Color de ojos: </strong>{store.personaje[id]?.eye_color}</h5>
      <h5 className="card-title"><strong>Año de nacimiento: </strong>{store.personaje[id]?.birth_year}</h5>
      <h5 className="card-title"><strong>Género: </strong>{store.personaje[id]?.gender}</h5>
      <h5 className="card-title"><strong>Mundo natal: </strong>{store.personaje[id]?.homeworld}</h5>
      <p className="card-text">Films: <li>{store.personaje[id]?.films}</li></p>

        <a href="https://www.disneyplus.com/es-cl?cid=DSS-Search-Google-71700000075919634-&s_kwcid=AL!8468!3!522205218624!b!!g!!star%20wars%20series&gclid=Cj0KCQjwgYSTBhDKARIsAB8Kuks8heVLNNYi5ezflKzyn1rfeZncgcvlYH4TRXAsZ8liTYHY9AwQNNAaAinYEALw_wcB&gclsrc=aw.ds">
          <small className="text-muted">Ver Episodios</small>
        </a>
      </div>
    </div>
  );
};
