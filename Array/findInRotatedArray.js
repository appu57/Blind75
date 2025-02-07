function findInSortedArray(nums,target){
    let start = 0;
    let end = nums.length-1;
    while(start <= end){
        let mid = Math.floor((end+start)/2);
        if(nums[mid]== target){
            return mid;
        }
        if(nums[start]  <= nums[mid]){
            if(nums[start] <= target && nums[mid]>=target){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }else{
            if(nums[mid] <= target && nums[end]>=target){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }return -1;
}console.log(findInSortedArray([3,4,5,1,2],2))