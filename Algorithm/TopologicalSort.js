 var topologyOrder = function(numCourses,prerequisites){

       let graph = new Array(numCourses);

       let indegree = new Array(numCourses);

       for(let i=0;i<numCourses;i++){
           graph[i] = []; 
       }
   
       for(let prerequisite of prerequisites){
           let from = prerequisite[1];
           let to = prerequisite[0];
           graph[from].add(to);
           indegree[to]++;
       }

       let queue = [];
  
       for(int i=0;i<indegree.length;i++){
            if(indegree[i] == 0){
               queue.push(i);
            }
       }

       if(queue.length == 0) return 0;

       let res = [];                
       let visited = new Set();     
       let count = 0;

       while(queue.length>0){
             let node = queue.shift();
             if(visited.has(node)) return 0;
             visited.push(node);
             res.push(node);
             for(int n of graph[node]){
                  indegree[n]--;
                  if(indegree[n] == 0) queue.push(n);
             }
             count++;
      }

      return count == numCourses ? res : 0;
}
