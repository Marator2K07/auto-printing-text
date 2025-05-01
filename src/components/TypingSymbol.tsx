import React, { useEffect, useState } from "react";
import { TypingStyle } from "../types";
import { generateSymbol } from "../utils";

interface TypingSymbolProps {
  typingStyle: TypingStyle; // эффект перехода между символами
  steps: number; // количество итераций до прихода к цели
  duration: number; // скорость прихода к символу-цели в миллисекундах
  target: string; // конечная цель имитации печати
}

const TypingSymbol: React.FC<TypingSymbolProps> = ({
  typingStyle,
  steps,
  duration,
  target,
}) => {
  const [symbol, setSymbol] = useState("");

  async function typingStep(
    typingStyle: TypingStyle,
    target: string,
    start: string,
    index: number,
    ms: number
  ) {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        let symbol = generateSymbol(typingStyle, target, start, index);
        resolve(symbol);
      }, ms);
    });
  }

  useEffect(() => {
    let startSymbol = "";
    const stepSpeed = duration / steps;

    const typingProcess = async ()=> {
      for (let i = 0; i < steps; i++) {
        console.log(steps - i);
        
        startSymbol = await typingStep(
          typingStyle,
          target,
          startSymbol,
          steps - i,
          stepSpeed
        );
        setSymbol(startSymbol);
        console.log(startSymbol);
      }
    };

    typingProcess();
  }, [typingStyle, duration, steps, target]);

  return <span>{symbol}</span>;
};

export default TypingSymbol;
