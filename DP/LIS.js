const lengthOfLIS = function(nums) {
    let tails = new Array(nums.length).fill(0);
    let size = 0;

    for (let x of nums) {
        let i = 0, j = size;
        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (tails[m] < x) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        tails[i] = x;
        if (i === size) ++size;
    }
    return size;
};
// class Solution {
//     public int lengthOfLIS(int[] nums) {
//         int n=nums.length;
//         List<Integer>li=new ArrayList<>();
//         li.add(nums[0]);
//         for(int i=1;i<n;i++)
//         {
//             int value=nums[i];
//             if(value>li.get(li.size()-1))
//             {
//                 li.add(value);
//             }
//             else{
//                 int index=BinarySearch(li,value);
//                 li.set(index,value);
//             }
//         }
//         return li.size();
//     }
    
//     private int BinarySearch(List<Integer>li,int value)
//     {
//         int low=0,high=li.size()-1;
//         while(low<=high)
//         {
//             int mid=(low+high)/2;
//             if(li.get(mid)==value)
//             {
//                 return mid;
//             }
//             else if(li.get(mid)<value)
//             {
//                 low=mid+1;
//             }
//             else{
//                 high=mid-1;
//             }
//         }
//         return low;
//     }
// }