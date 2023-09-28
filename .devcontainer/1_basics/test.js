console.log("hey js");
//Let,var and const.
//const->change nhi ho sakta cahe hm change karna bh cahe to value.To isme hm kuch important information store kar sakte hain.
//1.
const accountId=14423 
//accountId=213    ye allowed nhi hoga 
let accountEmail="harsh@gmail.com"
var accountPassword="123"
accountCity="Patna"   //this way is also not preferred.We should always provide type of variable in js.But it will also not throw error
console.log(accountId)


/* var is prefferd less or not preffered in modern day js because of issue in block scope and functional scope*/
//Agar js me hm variable declare karke chor dete hain and use hm koi value nhi dete hain to print karane pe wo undefined dega.
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])   //Here value of accountState will be printed as undefined.