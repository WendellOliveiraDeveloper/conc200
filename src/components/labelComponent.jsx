import React from "react";

const LabelComponent = ({ tituloLabel, nomeInput, required }) => {
  return (
    <div className="label">
      <label htmlFor={nomeInput}>
        {tituloLabel}
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <label htmlFor=""></label>
    </div>
  );
};

export default LabelComponent;
