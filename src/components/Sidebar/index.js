import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as SeriesActions } from "../../store/ducks/serie";

import ModalCMP from "../Modal";
import AddSerieModal from "./modals/addSerieModal.js";

const Sidebar = () => {
  
  const data = useSelector(state => state.serie.data);
  const { series } = data;

  const [isOpen, setIsOpen] = useState(false);
  
  const setModal = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();
  const triggerAction = (actionCreator, upData) =>
    dispatch(actionCreator(upData));

  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar__list">
          {series.map((serie) => (
            <li key={serie.id} className="sidebar__item">
              <h3 className="sidebar__title">{serie.title}</h3>
              <button
                type="button"
                className="sidebar__button"
                onClick={() => triggerAction(SeriesActions.selectSerie, serie)}
              >
                Ver Trailer
              </button>
            </li>
          ))}
        </ul>
        <button 
          type="button" 
          className="sidebar__button sidebar__button--primary"
          onClick={() => setModal()}
        >Adicionar Serie</button>
      </aside>
      <ModalCMP
        modalIsOpen={isOpen}
        closeModal={setModal}
        modaltitle={"Nova Serie"}
      >
        <AddSerieModal />
      </ModalCMP>
    </>
  );
};

export default Sidebar;
