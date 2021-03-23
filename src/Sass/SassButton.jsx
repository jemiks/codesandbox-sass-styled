import React from "react";
import "./SassButtonStyle.scss";

const SassButton = ({ type }) => (
  <button className={`btn ${type}`}>sass button</button> //
);

export default SassButton;
