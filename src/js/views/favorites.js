import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row">
      <h1 className="col-md-12 text-center title text-danger">FAVORITES</h1>
      <div className="col-md-6 offset-3">
        {/*  LIST OF FAVORITES  */}
        <div className="list-group-item">
          This is your List of Favorites
          <span className="float-right">{store.favorites.length}</span>
        </div>
        <ul className="list-group">
          {!!store.favorites.length !== 0 &&
            store.favorites.map((objeto, index) => {
              return (
                <li key={index} className="list-group-item" id="favorito2">
                  {objeto}{" "}
                  {
                    <i
                      onClick={() => actions.deleteFavorite(objeto)}
                      className="fa fa-trash-alt float-right"
                    ></i>
                  }
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
