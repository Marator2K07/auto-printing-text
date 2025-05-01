import { TypingStyle } from "./types";

export function generateRandomSymbol(characters: string, target: string, start: string) {
  
}

export function generateSymbol(
  style: TypingStyle,
  target: string,
  start: string,
  index: number,
) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  if (index === 1) 
    return target;

  switch (style) {
    case TypingStyle.RANDOM:
      const randomIndex = Math.floor(Math.random() * characters.length);
      result = characters[randomIndex];
      break;

    case TypingStyle.CONSISTENT:
      const consistentChar = characters[0]; // Выбор первого символа для последовательного ввода
      result = consistentChar.repeat(12);
      break;

    case TypingStyle.ASCENDING:
      for (let i = 0; i < 12; i++) {
        result += characters[i % characters.length]; // Зацикливание по символам
      }
      break;

    case TypingStyle.DESCENDING:
      for (let i = 12 - 1; i >= 0; i--) {
        result += characters[i % characters.length]; // Зацикливание по символам в обратном порядке
      }
      break;
  }

  return result;
}
