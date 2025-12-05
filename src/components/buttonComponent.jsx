import React from "react";
import "./styles/buttonStyle.css";

const ButtonComponent = ({texto}) => {
  return (
    <div className="botaoPricipal">
      <button>{texto}</button>
    </div>
  );
};

export default ButtonComponent;
