import React from "react";
import "./Pictures.css";

const Pictures = props => (
  <div className="card" onClick={() => props.toggleClick(props.chosen,props.id)}>
    <div data-id={props.id} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Pictures;
