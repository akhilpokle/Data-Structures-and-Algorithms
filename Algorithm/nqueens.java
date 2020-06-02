class Solution {
    List<List<String>> res = new ArrayList<>();
    public List<List<String>> solveNQueens(int n) {
        boolean[] cols = new boolean[n];
        boolean[] dll = new boolean[2*n];
        boolean[] dlr = new boolean[2*n];
        dfs(0,new ArrayList<>(),cols,dll,dlr,n);
        return res;
    }
    
    public void dfs(int row,List<String> curr,boolean[] cols,boolean[] dll,boolean[] dlr,int n){
        if(row == n){
            res.add(new ArrayList<String>(curr));
            return;
        }
        for(int col=0;col<n;col++){
            int dl1 = row+col;
            int dl2 = row-col+n;
            if(cols[col] || dll[dl1] || dlr[dl2]) continue;
            cols[col] = true;
            dll[dl1] = true;
            dlr[dl2] = true;
            char[] chararray = new char[n];
            Arrays.fill(chararray,'.');
            chararray[col] = 'Q';
            String string = new String(chararray);
            curr.add(string);
            dfs(row+1,curr,cols,dll,dlr,n);
            curr.remove(curr.size()-1);
            cols[col] = false;
            dll[dl1] = false;
            dlr[dl2] = false;
        }
    }
}
