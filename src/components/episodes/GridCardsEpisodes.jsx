import { CardEpisode } from "./CardEpisode";
import { useFetchEpisodes } from "../../hook/useFetchEpisodes";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";

export const GridCardsEpisodes = () => {
  const [info, state, changeRoute] = useFetchEpisodes();

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
        <CardEpisode state={state} />
      </div>
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
