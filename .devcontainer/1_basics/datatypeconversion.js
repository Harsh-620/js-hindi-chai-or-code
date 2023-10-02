//Here we are going to learn about type conversion
let score="42";
console.log(typeof score);
let convertedValue=Number(score);   //String converted to number.//Number ko aisehn likheneg jb convert karana ho to.
console.log(typeof convertedValue);   

//case of NaN
let score1="42abc";
let newvalue=Number(score1);
console.log(typeof newvalue);   //Yahn to wo type dikhadega ki number hai but wo pure tarike se number me convert nhi hoga. //Output=number
console.log(newvalue); //Yahn print karne se output ayega Nan

//Agar null ko convert karenge number me to wo zero dega output
//agar undefined ko convert karenge number me to Nan hn ayega
//agar bool ko convert karenge number meto 1 ya 0 dega
//Agar koi string hai jo convert nhi ho sakta to use convert karane ke bad agar use print karenge to NaN dega.

//conversion in boolean
//a) 1=>true
//b) 0=>false
//c)""=>false  //Empty string is false
//d) undefined=>false
//e) null=>false
//f) 0 , -0 , and NaN turn into false ; other numbers turn into true
//Any filled string gives true.

let x=undefined;
console.log(typeof x);
let y=String(x);
console.log(y);
console.log(typeof y);
 

