function arrangeWordListInAlphabeticalOrder(wordlist) {
  let sortedWordList = [];
  let values = []

  for (let i = 0; i < wordlist.length; i++) {
   values.push([wordlist[i], 0]);
    for (let j = 0; j < wordlist.length; j++) {
      if (wordlist[i] > wordlist[j]) {
        values[i][1]++;
      }
    }

    if (sortedWordList[values[i][1]] === undefined) {
      sortedWordList[values[i][1]] = values[i][0];
    } else {
      sortedWordList[values[i][1] + 1] = values[i][0];
    }
  }

  return sortedWordList;
}

module.exports = arrangeWordListInAlphabeticalOrder;
