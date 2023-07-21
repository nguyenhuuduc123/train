"use client";
import React, { useState } from "react";
import style from "../app/calculator/calculator.module.css";
function ShowHistoryButton() {
  const [click, isClick] = useState(false);
  const getAllHistory = JSON.stringify(localStorage.getItem("showValue")!);
  return (
    <div>
      <button className={style.btn} onClick={() => isClick(!click)}>
        show history
      </button>
      {click && <div className={style.history_show}>{getAllHistory}</div>}
    </div>
  );
}

export default ShowHistoryButton;
