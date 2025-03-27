var coinChange = function(coins, amount) {
    let minCoins = new Array(amount + 1).fill(amount + 1);
    minCoins[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coins[j]]);
            }
        }
    }

    return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;    
};
// Time complexity: O(a∗c)
// a is number of amount and c is number of coins

// Space complexity: O(a)


class Solution {
    recursion(index, arr, t) {
        if (index === 0) {
            if (t % arr[index] === 0) return t / arr[index];
            else return -1;
        }
        let notTake = 0 +  this.recursion(index - 1, arr, t);//we dont take any coins , so number of coins collected is 0
        let take = Infinity;
        if (arr[index] <= t) {
            take = 1 + this.recursion(index, arr, t - arr[index]);
        }
        return Math.min(take, notTake); //min number of coins collected 
    }

    memoization(index, arr, t, dp) {
        if (index === 0) {
            if (t % arr[index] === 0) return t / arr[index];
            else return Infinity;
        }
        if (dp[index][t] !== -1) return dp[index][t];
        let notTake = this.memoization(index - 1, arr, t, dp);
        let take = Infinity;
        if (arr[index] <= t) {
            let ans = this.memoization(index, arr, t - arr[index], dp);
            if (ans !== Infinity) take = 1 + ans;
        }
        return (dp[index][t] = Math.min(take, notTake));
    }

    tabulation(arr, target) {
        let n = arr.length;
        let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));
        for (let t = 0; t <= target; t++) {
            dp[0][t] = t % arr[0] === 0 ? t / arr[0] : Infinity;
        }
        for (let i = 1; i < n; i++) {
            for (let t = 0; t <= target; t++) {
                let notTake = dp[i - 1][t];
                let take = Infinity;
                if (arr[i] <= t) take = 1 + dp[i][t - arr[i]];
                dp[i][t] = Math.min(take, notTake);
            }
        }
        let res = dp[n - 1][target];
        return res >= Infinity ? -1 : res;
    }

    spaceOptimization(arr, target) {
        let n = arr.length;
        let prev = new Array(target + 1).fill(0);
        let cur = new Array(target + 1).fill(0);
        for (let t = 0; t <= target; t++) {
            prev[t] = t % arr[0] === 0 ? t / arr[0] : Infinity;
        }
        for (let i = 1; i < n; i++) {
            for (let t = 0; t <= target; t++) {
                let notTake = prev[t];
                let take = Infinity;
                if (arr[i] <= t) take = 1 + cur[t - arr[i]];
                cur[t] = Math.min(take, notTake);
            }
            prev = [...cur];
        }
        let res = prev[target];
        return res >= Infinity ? -1 : res;
    }

    coinChange(coins, amount) {
        return this.spaceOptimization(coins, amount);
    }
}