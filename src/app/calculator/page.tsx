"use client";
import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import style from "./calculator.module.css";
import Button from "@/components/button";
import { loopIndex } from "@/utils/loopIndex";

function Calculator() {
  // hook
  const [showValue, setShowValue] = useState("");
  const preValue = useRef("");
  const allHistorySave = useRef("");
  useEffect(() => {
    preValue.current = showValue;
  }, [showValue]);
  // handle event
  const handleNumberClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    try {
      const value = (e.target as HTMLInputElement).textContent?.toString();
      setShowValue((pre) => pre + value);
      if (value === "=") {
        setShowValue(eval(showValue).toString());
        allHistorySave.current += `${preValue.current} = ${eval(
          showValue
        ).toString()} \n`;
        localStorage.setItem("showValue", allHistorySave.current);
      } else if (value?.includes("<")) {
        setShowValue((pre) => pre.slice(0, -1));
      }
      if (value === "p") {
        setShowValue("");
      }
    } catch (err: any) {
      alert(err);
    }
  };
  return (
    <div className={style.calculator}>
      <div className={style.calculator_header}>
        <p className={style.calculator_header_history}>{preValue.current}</p>
      </div>
      <div className={style.calculator_main}>
        <h2 className={style.calculator_main_content}>{showValue}</h2>
      </div>
      <div className={style.calculator_bottom}>
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
