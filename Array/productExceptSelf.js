function productExceptSelf(nums){
    let leftProductAtIndex =[];
    let rightProductAtIndex =[];//when asked what is the maxSum,maxProduct or any math function at ith  index use left and right
    let length = nums.length;
    leftProductAtIndex[0]=1;
    rightProductAtIndex[length-1]=1;

    for(let i=1;i<length;i++){
        leftProductAtIndex[i] = nums[i-1] * leftProductAtIndex[i-1];
    }
    for(let i=length-2;i>=0; i--){
        rightProductAtIndex[i] = nums[i+1] * rightProductAtIndex[i+1];
    }

    let solution = [];
    for(let i=0;i<length;i++){
        solution.push(leftProductAtIndex[i]*rightProductAtIndex[i])
    }
    return solution;
    
}
console.log(productExceptSelf([1,2,3,4]));