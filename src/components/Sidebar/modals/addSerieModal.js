import React from "react";
import { useDispatch } from "react-redux";

import { Creators as SeriesActions } from "../../../store/ducks/serie";

import useForm from "../../hooks/useForm";

const AddSerieModal = () => {
  const dispatch = useDispatch();
  const [
    { values, loading }, 
    handleChange, 
    handleSubmit
  ] = useForm();

  const triggerAction = (actionCreator, upData) => {
    console.log('POST/ serie ::', upData);
    return dispatch(actionCreator(upData));
  }

  return (
    <form onSubmit={() => handleSubmit(triggerAction(SeriesActions.addSerie, values))}>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Titulo da Serie"
      />
      <input
        onChange={handleChange}
        type="text"
        name="image"
        placeholder="Adicione um link de uma imagem da serie"
      />
      <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  );
};

export default AddSerieModal;