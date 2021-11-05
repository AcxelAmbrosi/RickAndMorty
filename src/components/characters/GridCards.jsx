import { Card } from "./Card";
import { useFetch } from "../../hook/useFetch";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";
import { useState } from "react";
import { ModalCharacter } from "./ModalCharacter";

export const GridCards = () => {
  const [info, state, changeRoute] = useFetch();
  const [click, setClick] = useState(false);
  const [stateModal, setStateModal] = useState([]);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClickNext = () => {
    changeRoute("next");
  };
  const handleClickPrevious = () => {
    changeRoute("prev");
  };
  return (
    <>
      <div className={Styles.containerTitle}>
        <h1 className={Styles.title}>CHARACTERS</h1>
      </div>
      <div className={Styles.container}>
        {state.map((res) => {
          return (
            <Card
              key={res.id}
              state={res}
              modal={(state) => {
                setStateModal(state);
              }}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      {click === true && <ModalCharacter state={stateModal} setStateModal={handleClick} />}
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
