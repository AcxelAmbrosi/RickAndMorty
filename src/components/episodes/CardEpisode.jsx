import React from "react";
import Styles from "../../styles/GridCards.module.css";
export const CardEpisode = ({ state }) => {
  return (
    <>
      {state.map((res) => {
        return (
          <div className={Styles.item} key={res.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className={` ${Styles.card} card-body`}>
                <h5 className="card-title">{res.name}</h5>
                <p className={`${Styles.cardText} card-text`}>{`Air_date: ${res.air_date}`}</p>
                <p className={`${Styles.cardText} card-text`}>{`Episode: ${res.episode}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
