// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4

// my idea runtime 23ms => bad
var islandPerimeter = function (grid) {
  let p = 0;
  let cols = grid[0].length;
  let top = new Array(cols + 2).fill(0);
  let bottom = new Array(cols + 2).fill(0);
  let padded = grid.map((row) => [0, ...row, 0]);
  let newGrid = [top, ...padded, bottom];
  for (let i = 1; i < newGrid.length - 1; i++) {
    for (let j = 1; j < newGrid[0].length - 1; j++) {
      if (newGrid[i][j] === 1) {
        p += 4;
        p -=
          newGrid[i - 1][j] +
          newGrid[i + 1][j] +
          newGrid[i][j - 1] +
          newGrid[i][j + 1];
      }
    }
  }
  return p;
};
