function rotatedSorted(nums){
    let start = 0;
    let end = nums.length -1;
    while(start <= end){
        let mid = Math.floor(end-start)/2;
        if(nums[mid] < nums[mid-1]){
            return nums[mid];
        }else if(nums[start] <= nums[mid] && nums[mid] > nums[end] ){ //means its sorted but mid will be found when start is greater and end is also greater in rotated subarray
            start = mid + 1;
        } 
        else{
            end = mid-1;
        }
    }
    return nums[start]
}
console.log(rotatedSorted([3,4,5,1,2]));