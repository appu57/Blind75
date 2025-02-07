function maximumProduct(nums){
    let currMaxAtiIndex=0;
    let currMinAtiIndex =0;
    let length = nums.length;
    let result = Math.max(...nums);

    for(let i=0;i<length;i++){
       let temp = currMaxAtiIndex * nums[i];
       currMaxAtiIndex = Math.max(temp , currMinAtiIndex * nums[i] , nums[i]);
       currMinAtiIndex = Math.min( temp , currMinAtiIndex*nums[i] , nums[i]);
       result = Math.max(result , currMaxAtiIndex);
    }
    return result;
}
console.log(maximumProduct([2,3,-2,4]))

//currMaxAtiIndex holds the maximum product we can get at ith index
//currMinAtiIndex holds the minimum product we can get at ith index

// temp = 2 * 1 = 2;
// currMaxAtiIndex = Math.max(2,  max(1*2 , 2));
// currMinAtiIndex = Math.min(2,  min(1*2 , 2));  either can be product of elements from 0 to i or product of itself with 1

//for eg at 2nd index maxProduct is -2 and minProduct is -12  [2*3*-2] = -12 or [-2*1] =-2  among both which is max (-2) so -2 is max and -12 is min


//we can also have a two array for left and right and use for max and min product subarray.

//FORMULA TO FIND CURR MAX AT ITH INDEX = MATH.MAX( TEMP , MATH.MAX(CURRMIN * NUMS[I]   , NUMS[I])); //WHERE TEMP IS PRODUCT OF NUMS[I] * PREVCURRMAX 