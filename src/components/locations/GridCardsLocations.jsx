import { CardLocation } from "./CardLocation";
import { useFetchLocations } from "../../hook/useFetchLocations";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";

export const GridCardsLocations = () => {
  const [info, state, changeRoute] = useFetchLocations();

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
        <CardLocation state={state} />
      </div>
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
