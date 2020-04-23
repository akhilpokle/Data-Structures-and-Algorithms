/********************************************************************************************************************************

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

*********************************************************************************************************************************/






function numIslands(grid) {
  const H = grid.length;
  const W = H && grid[0].length;
  let count = 0;
  
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === '0') continue;
      
      count++;
      dfs(r, c);
    }
  }
  return count;
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r === H || c === W) return;
    if (grid[r][c] === '0') return;
    
    grid[r][c] = '0';
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }
}
