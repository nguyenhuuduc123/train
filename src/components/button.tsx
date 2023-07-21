import React from "react";
import style from "../app/calculator/calculator.module.css";

type prop = {
  styleButton: any;
  handleNumberClick: (e: React.MouseEvent) => void;
};
function Button({ styleButton, handleNumberClick }: prop) {
  return (
    <>
      <a
        href="#!"
        className={style.item}
        onClick={(e: React.MouseEvent) => handleNumberClick(e)}
      >
        {styleButton}
      </a>
    </>
  );
}

export default Button;
