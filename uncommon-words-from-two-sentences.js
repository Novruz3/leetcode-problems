var uncommonFromSentences = function (s1, s2) {
  let map = new Map();
  let str = s1 + " " + s2;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], "yes");
    } else {
      map.set(arr[i], "no");
    }
  }
  let arr2 = [...map];
  let res = [];
  arr2.forEach((el) => el[1] == "no" && res.push(el[0]));
  return res;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
