var binaryGap = function (n) {
  let str = "";
  while (n > 1) {
    let rem = n % 2;
    str = rem.toString() + str;
    n = (n - rem) / 2;
  }
  str = 1 + str;
  let max = 0;
  let l = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == "1") {
      max = Math.max(max, i - l);
      l = i;
    }
  }
  return max
};

console.log(binaryGap(8));
console.log(binaryGap(5));
console.log(binaryGap(22));
console.log(binaryGap(2));
