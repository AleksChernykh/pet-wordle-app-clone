import wordsBank from './wordle-bank.txt';

export const boardDefault = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const getWordsSet = async () => {
  let wordsSet;
  let todaysWord;
  await fetch(wordsBank)
    .then((response) => response.text())
    .then((data) => {
      const wordsArr = data.split('\n');
      todaysWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      wordsSet = new Set(wordsArr);
    });
  return { wordsSet, todaysWord };
};
