import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar bg-black mb-3">
<Link to="/">
  <img src="https://cdn.shopify.com/s/files/1/0333/7961/4851/products/p-842978152264-1-155d02a0-06c9-4812-93a1-4db202818867_c1a3dc83-2391-4dc0-bb81-6d4c43ca73a1.png?v=1640188885" className="imagen"></img>
</Link>
      <Link to="/personaje">
       <div className="titulo">Personaje</div>
      </Link>
      <Link to="/planetas">
        <div className="titulo">Planetas</div>
      </Link>
      <Link to="/starships">
        <div className="titulo">Starships</div>
      </Link>

      <div className="ml-auto">
        <Link to="/personaje">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
