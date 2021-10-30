import { Card } from "./Card";
import { useFetch } from "../../hook/useFetch";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";

export const GridCards = () => {
  const [info, state, changeRoute] = useFetch();

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
        <Card state={state} />
      </div>
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
