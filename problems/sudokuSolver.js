class Solution {
    public void solveSudoku(int[][] board) {
        solve(board);
    }
    
    public boolean solve(int[][] board){

        // iterate through board and find the first empty cell
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
        //if empty cell is found process it
                if(board[i][j] == 0){
       
        // try all combinations from 1 - 9
                    for(int c = 1;c<=9;c++){
        // check if the current value of c satisfies all the conditions
                        if(isValid(board,i,j,c)){

        // if it satisfies, then set the empty cell to that integer 
                            board[i][j] = c;
 
        // here we recursively call the solve method again.
        // this leads to storing of current variables on to call stack
                            if(solve(board)){
                                return true;
                            }else{
        // while recursing, if at some point we meet a condition which isn't satisfied
        // and we end up back in current call stack, set the cell back to empty cell
        // and try with next integer
                                board[i][j] = 0;
                            }
                        }
                    }
        // if all the integers from 1 - 9 doesn't satisfy then return false
                    return false;
                }
            }
        }
       // if all conditions are satisfied return true;
        return true;
    }
    

   //here we use bit of math 
    public boolean isValid(int[][] board,int row,int col,int c){
        
        // we chose to go from 0 - 9 since 
        // each column has 9 cells
        // each row has 9 cells 
        // and we need to check for each 3x3 gird and 3*3 = 9
        for(int i=0;i<9;i++){
            
            // check for each cell in column, 
            //if they're same then return false ie we found a duplicate
            if(board[i][col] != 0 && board[i][col] == c) return false;

            // check for rows
            if(board[row][i] != 0 && board[row][i] == c) return false;

            // check for each grid 
            // each grid is 3X3,
           // grid 1:  
           // [0,0][0,1][0,2]
           // [1,0][1,1][1,2]
           // [2,0][2,1][2,2]
          
           // grid 2: 
           // [0,3][0,4][0,5]
           // [1,3][1,4][1,5]
           // [2,3][2,4][2,5]..
 
          //  if we choose row = 2 and column = 4 we want
          //  row values between 0 - 2
          //  column values between 3 - 5 
          //  for checking the grid and we have 9 values for i
         
           // eg for i = 4, we want cell at [1,4]
          //  since row has to in between 0 - 2, and column in between 3 -5
          //  row equation : 3 * (row / 3) + i / 3 
          //  column equation : 3 * (col/3) + i % 3

          //  for i = 4, row = 3*(1/3)+4/3 == 3*(0) + 1 = 1
          //             col = 3*(4/3)+4%3 == 3*(1) + 1 = 4 

            if(board[3*(row/3)+i/3][3*(col/3)+i%3] != 0 &&
               board[3*(row/3)+i/3][3*(col/3)+i%3] == c) return false;
        }
        return true;
    }
}
