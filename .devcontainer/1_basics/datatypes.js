"use strict" ;//Treats all js code as newer version of js.
//javascript ka engine jo hai wo browser ke andar chupa hai to isliye hm browser pe bh js ko use kar sakte hain. 
// alert(3+3)  //Yahan hm node me use kar raha hun na ki browser me.
//code readability should always be there
let name="harsh";
let age=18;
let isLoggedIn=false;
//Three types of datatype.
/*1 primitive=number,string,boolean,bigint

3. NULL :- It is a standalone value.It is a representation of empty value intentionally.It is a special type
ex. Agar hme backend se temperature cahiye and us samay temp ka data backened par nhi hai then agar backend 0 bhj dega to wo to ek value ho jayega.To wo intentionally  null bhejega.
4.UNDEFINED:- When value is not assigned.
ex. Jaise hmne piche dekha tha ki varriable declare karne ke bad bh agar hm usme kooi value na dein and use hm agar print karayein to wo undefined dega.
5. symbol=>to find uniqueness between componenets.*/

/*2. composite=object,function*/

console.log(typeof age);
console.log(typeof null); //here it gives object but typeof undefined is undefined  .
console.log(typeof undefined);