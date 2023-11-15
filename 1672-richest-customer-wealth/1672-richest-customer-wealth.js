/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(account => {
        let sumMoney = 0
        account.forEach(num => sumMoney += num)
        
        return sumMoney
    }))
};