import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div className={`${Styles.imagen_rick} d-flex flex-column`}>
      <div className="d-flex flex-fill align-items-center justify-content-center">
        <div className="mx-5">
          <Link to="/characters" className={` ${Styles.button} btn btn-outline-success font-weight-bold`}>
            CHARACTERS
          </Link>
        </div>
        <div className="mx-5">
          <Link to="/locations" className={` ${Styles.button} btn btn-outline-success font-weight-bold`}>
            LOCATIONS
          </Link>
        </div>
        <div className="mx-5">
          <Link to="/episodes" className={` ${Styles.button} btn btn-outline-success font-weight-bold`}>
            EPISODES
          </Link>
        </div>
      </div>
      <div className="d-flex flex-fill">
        <div className="flex-fill">hola1</div>
        <div className="flex-fill">hola2</div>
      </div>
    </div>
  );
};
