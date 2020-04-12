import React from "react";
import { useSelector } from "react-redux";

const Image = () => {
  const data = useSelector((state) => state.serie.data);
  const { activeSerie } = data;

  return (
    <figure className="figure" >
      <img className="figure__image" src={activeSerie.image} alt={activeSerie.title} />
      <figcaption className="figure__caption">{activeSerie.title}</figcaption>
    </figure>
  );
};

export default Image;
