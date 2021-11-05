import React from "react";
import Styles from "../../styles/GridCards.module.css";
import Image from "../../images/world_img.png";

export const CardEpisode = ({ state, modal, handleClick }) => {
  return (
    <>
      <div
        className={` ${Styles.mar} card border`}
        style={{ width: "18rem" }}
        onClick={() => {
          modal(state);
          handleClick();
        }}
      >
        <img className={`rounded`} src={Image} alt={state.name} />
        <div className="card" style={{ width: "18rem" }}>
          <div className={` ${Styles.card} card-body`}>
            <h5 className="card-title">{state.name}</h5>
            <p className={`${Styles.cardText} card-text`}>{`Air_date: ${state.air_date}`}</p>
            <p className={`${Styles.cardText} card-text`}>{`Episode: ${state.episode}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
