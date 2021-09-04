function maxVal(num) {
  const negativeVal = num < 0;
  const numStr = Math.abs(num).toString();
  const permutations = [];

  for (let i = 0; i <= numStr.length; i++) {
    const permutation = Number(numStr.substr(0, i) + '5' + numStr.substr(i));
    permutations.push(permutation);
  }

  return negativeVal
    ? Math.min(...permutations) * -1
    : Math.max(...permutations);
};

console.log(maxVal(-15))
