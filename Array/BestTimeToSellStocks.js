function maxProfit(prices){
    let currDiscount =0;
    let profit=0;
    let length = prices.length;
    let min = prices[0];//lets consider 1st one to be the min
    for(let i=0;i<length;i++){
        if(prices[i] > min) {//means if at ith index is greater than the selected max then it gives profit
           currDiscount = prices[i]-min;
           profit = Math.max(profit,currDiscount);
        }
        else{
            min = prices[i]; //consider we select 1st index as min value to buy stock so this becomes selected
        }
    }
    return profit;
}

console.log(maxProfit([7,6,4,3,1]));