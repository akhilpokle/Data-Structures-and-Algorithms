    var findKthLargest = function(nums, k) {
        return quickSelect(nums,nums.length-k,0,nums.length-1);
    };

    function quickSelect(nums,k,low,high){
        if(low == high){
            return nums[low];
        }
        let pivot = partition(nums,low,high);
        if(pivot == k) return nums[pivot];
        if(pivot<k){
            return quickSelect(nums,k,pivot+1,high);
        }else{
            return quickSelect(nums,k,low,pivot-1);
        }
    }

    function partition(nums,low,high){
        let idx = Math.floor(low+(high-low)/2);
        swap(nums,low,idx);
        let pivot = low;
        low++;
        while(low<=high){
            while(low<=high && nums[low] < nums[pivot])
                low++;
            while(low<=high && nums[high] >= nums[pivot])
                high--;
            if(low>high){
                swap(nums,pivot,high);
                return high;
            }
            swap(nums,low,high);
        }
        return high;
    }
