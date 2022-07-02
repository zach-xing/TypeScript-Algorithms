function buildPatternTable(word: string) {
  const patternArr = [0];
  let prevIdx = 0,
    currIdx = 1;
  const len = word.length;
  while (currIdx < len) {
    if (word[prevIdx] === word[currIdx]) {
      patternArr[currIdx] = prevIdx + 1;
      prevIdx++;
      currIdx++;
    } else if (prevIdx === 0) {
      patternArr[currIdx] = 0;
      currIdx++;
    } else {
      prevIdx = patternArr[prevIdx - 1];
    }
  }

  return patternArr;
}

export default function knuthMorrisPratt(text: string, word: string) {
  if (word.length === 0) {
    return 0;
  }

  let textIdx = 0,
    wordIdx = 0;
  const patternArr = buildPatternTable(word);

  while (textIdx < text.length) {
    if (text[textIdx] === word[wordIdx]) {
      if (word.length - 1 === wordIdx) {
        return textIdx - word.length + 1;
      }
      textIdx++;
      wordIdx++;
    } else if (wordIdx > 0) {
      wordIdx = patternArr[wordIdx - 1];
    } else {
      textIdx++;
    }
  }

  return -1;
}
