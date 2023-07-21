import React from "react";
import style from "../app/calculator/calculator.module.css";

type props = {
  styleButton: any;
  handleNumberClick: (e: React.MouseEvent) => void;
};
function Button({ styleButton, handleNumberClick }: props) {
  return (
    <>
      <a
        href="#!"
        className={style.calculator_bottom_item}
        onClick={(e: React.MouseEvent) => handleNumberClick(e)}
      >
        {styleButton}
      </a>
    </>
  );
}

export default Button;
