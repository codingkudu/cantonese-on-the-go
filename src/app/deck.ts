export class Card {
  en: string;
  zhHK: string;
  hint: string;
  jyutping: string;
}

export function shuffle(sourceArray: Card[]) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (sourceArray.length - i));
    const temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

