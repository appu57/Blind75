const climbingStairs = function(n){
    let dp= [];
    dp.push(1);
    dp.push(2);
    for(let i=3;i<n;i++){
        dp.push(dp[i-1]+dp[i-2]);
    }
    return dp[n];
}