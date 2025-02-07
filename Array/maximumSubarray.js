function maxSubArray(nums){
    let maximumSum = 0;
    let maximumTotalSum = nums[0];
    let length =nums.length;
    for(let i=0;i<length;i++){
         maximumSum += nums[i];
         maximumTotalSum = Math.max(maximumSum, maximumTotalSum);
         maximumSum = Math.max(maximumSum,0);//if maximum sum goes below 0 then make it 0 again
    } 
    return maximumTotalSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))