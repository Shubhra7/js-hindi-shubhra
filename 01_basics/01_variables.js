const accountId = 144553
let accountEmail = "Shubhra@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hc@future.in"
accountPassword = "21456"
accountCity = " Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])