import React from "react";
import Styles from "../../styles/GridCards.module.css";

export const Card = ({ state }) => {
  return (
    <>
      {state.map((res) => {
        return (
          <div className={`${Styles.item} `} key={res.id}>
            <div className="card border" style={{ width: "18rem" }}>
              <img src={res.image} className="card-img-top" alt="..." />
              <div className={` ${Styles.card} card-body`}>
                <h5 className="card-title">{res.name}</h5>
                {res.status === "Alive" ? (
                  <div className={`${Styles.cardText} card-text`}>
                    {`Status: ${res.status}`} <p className={Styles.statusAlive}> </p>
                  </div>
                ) : res.status === "Dead" ? (
                  <div className={`${Styles.cardText} card-text`}>
                    {`Status: ${res.status}`} <p className={Styles.statusDead}></p>
                  </div>
                ) : (
                  <div className={`${Styles.cardText} card-text`}>
                    {`Status: ${res.status}`} <p className={Styles.statusUnknow}></p>
                  </div>
                )}
                <p className={`${Styles.cardText} card-text`}>{`Specie: ${res.species}`}</p>
                <p className={`${Styles.cardText} card-text`}>{`Gender: ${res.gender}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
