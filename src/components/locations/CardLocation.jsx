import React from "react";
import Styles from "../../styles/GridCards.module.css";
export const CardLocation = ({ state }) => {
  return (
    <>
      {state.map((res) => {
        return (
          <div className={Styles.item} key={res.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className={` ${Styles.card} card-body`}>
                <h5 className="card-title">{res.name}</h5>
                <p className={`${Styles.cardText} card-text`}>{`Type: ${res.type}`}</p>
                <p className={`${Styles.cardText} card-text`}>{`Dimension: ${res.dimension}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
