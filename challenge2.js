function getHighestOccurChar(s) {
  let charList = s.toLowerCase().split("");
  let charOccurMap = new Map();
  charList.forEach((item) => {
    if (charOccurMap.has(item)) {
      charOccurMap.set(item, charOccurMap.get(item) + 1);
    } else {
      charOccurMap.set(item, 1);
    }
  });
  let highestOccurChar;
  let highestOccurNum = 0;
  charOccurMap.forEach((value, key) => {
    if (value > highestOccurNum) {
      highestOccurChar = key;
      highestOccurNum = value;
    }
  });
  return highestOccurChar;
}

console.log(getHighestOccurChar("Character"));
