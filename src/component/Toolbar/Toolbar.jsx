import React from "react";

const Toolbar = ({ incrementParaCount, decrementParaCount }) => {
  const incrementParagraphCount = () => {
    incrementParaCount();
  };

  const decrementParagraphCount = () => {
    decrementParaCount();
  };

  return (
    <div className="side-toolbar">
      <label htmlFor="">Add new Paragraph:</label>
      <button onClick={incrementParagraphCount}>+</button>

      <label htmlFor="">Remove Paragraph:</label>
      <button onClick={decrementParagraphCount}>-</button>
    </div>
  );
};

export default Toolbar;
