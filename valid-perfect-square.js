// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Example 1:
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

var isPerfectSquare = function (num) {
  let n = 0;
  switch (num % 10) {
    case 0:
      n += 10;
      while (n * n < num) {
        n += 10;
      }
      return n * n == num;
    case 1:
      n += 1;
      while (n * n < num) {
        if (n % 10 == 1) {
          n += 8;
        } else {
          n += 2;
        }
      }
      return n * n == num;
    case 4:
      n += 2;
      while (n * n < num) {
        if (n % 10 == 2) {
          n += 6;
        } else {
          n += 4;
        }
      }
      return n * n == num;
    case 5:
      n += 5;
      while (n * n < num) {
        n += 10;
      }
      return n * n == num;
    case 6:
      n += 4;
      while (n * n < num) {
        if (n % 10 == 4) {
          n += 2;
        } else {
          n += 8;
        }
      }
      return n * n == num;
    case 9:
      n += 3;
      while (n * n < num) {
        if (n % 10 == 3) {
          n += 4;
        } else {
          n += 6;
        }
      }
      return n * n == num;
    default:
      return false;
  }
};

// code some longer but result 0 ms.