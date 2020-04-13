/***********************************************************************************************************************************
Given a 2D grid, each cell is either a zombie 1 or a human 0. 
Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. 
Find out how many hours does it take to infect all humans?

Example:

Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
 
 ************************************************************************************************************************************/






var minDay = function(grid){
  let queue = [];
  let target = grid.length * grid[0].length;
  let count = 0;
  let days = 0;
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      if(grid[i][j] == 1){
        queue.push([i,j]);                 //populate queue for day 0
        count++;
      }
    }
  }

  let dirs = [[-1,0],[0,-1],[1,0],[0,1]];
  while(queue.length>0){
    let size = queue.length; 
    if(count == target) return days;              //everyone is infected
    
    //now iterate queue only for that day
    for(let i=0;i<size;i++){
      let curr = queue.shift();
      for(let dir of dirs){
        let x = curr[0] + dir[0];
        let y = curr[1] + dir[1];
        if(x >= 0 && x<grid.length          //check if the cordinates are valid  
           && y>=0 && y<grid[0].length 
           && grid[x][y] == 0){             // check if the grid[x][y] is human 
          count++;
          queue.push([x,y]);
          grid[x][y] = 1;
        }
      }
    }
    days++;
  }
  return -1;
}
