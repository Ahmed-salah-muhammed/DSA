function groupAnagrams(strs) {
  const dict = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");

    if (!dict[key]) {
      dict[key] = [];
    }

    dict[key].push(word);
  }

  return Object.values(dict);
}
