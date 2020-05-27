  let arr = [[0,1,0,1,0],
            [1,0,0,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,0,1,0]];

  function knows(i,j){
    return arr[i][j];
  }

  function celebrity(n){
    
    let A = 0;
    let B = n-1;

    while(A<B){
      if(knows(A,B)){
        A++;
      }else{
        B--;
      }
    }

    for(let i=0;i<n;i++){
      if( i!=A && (knows(A,i) || !knows(i,A))){
        return -1;
      }
    }

    return A;
  }           
