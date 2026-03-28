let buddyStrings = function (s, goal) {
  let arr = [];
  if (s.length !== goal.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] != goal[i]) {
      arr.push(i);
    }
    if (arr.length > 2) return false;
  }
  if (arr.length == 0) {
    let set = new Set(s.split(""));
    if (s.length === set.size) {
      return false;
    }
  }
  let [a, b] = arr;
  return s[a] === goal[b] && s[b] === goal[a];
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("abcd", "adcb"));
console.log(buddyStrings("aa", "ab"));
