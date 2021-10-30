import React from "react";
import Styles from "../styles/Header.module.css";
import rick from "../images/Rick-Ico.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <nav className={`${Styles.backHead} navbar  d-flex justify-content-around`}>
        <Link to='/home'>
          <img src={rick} alt="rick" />
        </Link>
        <h1 className={Styles.h1}>ADENTRATE EN EL INCREIBLE MUNDO DE RICK AND MORTY !</h1>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};
