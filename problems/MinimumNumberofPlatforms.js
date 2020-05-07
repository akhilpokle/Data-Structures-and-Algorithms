      let numPlatorms = function(arr,dep,n){
        let platforms = 1;
        let result = 1;
        arr.sort((a,b)=>a-b);            //sort all arrivals
        dep.sort((a,b)=>a-b);            //sort all departures
        let i=1;
        let j=0;
        while(i<n && j<n){
          // if arrival <= departure then increase number of platform required 
          if(arr[i]<=dep[j]){
            platforms++;
            i++;
          }else if(dep[j]<arr[i]){  // else decrease the number of platforms required
            platforms--;
            j++;
          }
          result = Math.max(platforms,result);
        }
        
        return result;
      }

      let arr = [900, 940, 950, 1100, 1500, 1800];
      let dept = [910, 1200, 1120, 1130, 1900, 2000];

      console.log(numPlatorms(arr,dept,6));
