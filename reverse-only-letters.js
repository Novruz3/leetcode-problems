var reverseOnlyLetters = function(s) {
  let arr = s.split("")
  let l = 0
  let r = arr.length - 1
  const isLetter = (c) => 
    (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) ||
    (c.charCodeAt() >= 97 && c.charCodeAt() <= 122)
  while (l < r) {
    while (l < r && !isLetter(arr[l])) {
      l++
    }
    while (l < r && !isLetter(arr[r])) {
      r--
    }
    if (l < r) {
      let rem = arr[l]
      arr[l] = arr[r]
      arr[r] = rem
    }
    l++
    r--
  }
  return arr.join("")
}

console.log(reverseOnlyLetters("ab-cd"))
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))