import React from "react";
import Style from "../../styles/Modal.module.css";
import { Modals } from "../Modals";
import { Status } from "./Status";

export const ModalCharacter = ({ state, setStateModal }) => {
  return (
    <Modals title={state.name} setStateModal={setStateModal}>
      <div className={`${Style.modals_container}`}>
        <div>
          <img className={`rounded`} src={state.image} alt={state.name} />
          <hr />
          <p>Created: {state.created}</p>
        </div>
        <div className={`${Style.modals_features}`}>
          <Status state={state} />
          <p className={`${Style.cardText} card-text`}>{`Specie: ${state.species}`}</p>
          <p className={`${Style.cardText} card-text`}>{`Gender: ${state.gender}`}</p>
          <div className={`${Style.cardText} card-text`}>
            <p className={`${Style.cardText} card-text`}>Origin:</p>
            <button className="btn btn-success">{state.origin.name}</button>
          </div>
          <div className={`${Style.cardText} card-text`}>
            <p className={`${Style.cardText} card-text`}>Location:</p>
            <button className="btn btn-success">{state.location.name}</button>
          </div>
        </div>
      </div>
    </Modals>
  );
};
