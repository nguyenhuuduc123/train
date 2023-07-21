"use client";
import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import style from "./calculator.module.css";
import Button from "@/components/button";
import { loopIndex } from "@/utils/loopIndex";

function Calculator() {
  // hook
  const [showValue, setShowValue] = useState("");
  const preValue = useRef("");
  useEffect(() => {
    preValue.current = showValue;
  }, [showValue]);
  const handleNumberClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).textContent?.toString();
    setShowValue((pre) => pre + value);
    if (value === "=") {
      setShowValue(eval(showValue).toString());
      localStorage.setItem("history", `eval(showValue).toString()`);
    } else if (value?.includes("<-")) {
      setShowValue((pre) => pre.slice(0, -1));
    }
  };
  return (
    <div className={style.calculator_main}>
      <div className={style.calculator_main__title}>
        <p className={style.title_text}>{preValue.current}</p>
      </div>
      <div className={style.calculator_main__content}>
        <h2 className={style.content__text}>{showValue}</h2>
      </div>
      <div className={style.calculator_main__bottom}>
        {loopIndex.map((index) => (
          <Button
            key={index}
            styleButton={index}
            handleNumberClick={handleNumberClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
