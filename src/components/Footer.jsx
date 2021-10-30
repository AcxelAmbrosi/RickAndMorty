import React from "react";
import Styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${Styles.backFoot} d-flex justify-content-around `}>
      <div className="flex-fill">
        <div className={`${Styles.backFoot} d-flex justify-content-around `}>
          <div className={Styles.backFoot}>
            <p className={Styles.cabecera}>CONTACTO:</p>
            <p className={Styles.parrafos}>El Oro - Santa Rosa</p>
            <p className={Styles.parrafos}> Correo: acxelandres@outlook.com</p>
            <p className={Styles.parrafos}>Telefono:0990321227</p>
          </div>
        </div>
      </div>
      <div className="flex-fill">
        <div className="d-flex justify-content-center">
          <div>
            <p className={Styles.cabecera}>REDES SOCIALES:</p>
            <p className={Styles.parrafos}>
              <i className="fab fa-youtube"> Youtube/acxel</i>
            </p>
            <p className={Styles.parrafos}>
              <i className="fab fa-facebook-square"> facebook/acxel</i>
            </p>
            <p className={Styles.parrafos}>
              <i className="fab fa-twitter-square"> twitter/acxel</i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
