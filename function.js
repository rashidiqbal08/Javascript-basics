// console.log("Hello rashid");
function wish()
{
    console.log("Happy birthday");
}
wish();
console.log("hello");
wish();

// when return in used inside the function body excution is stopped.
/*
function greet()
{
    return "Good morning"
}
let str=greet()
console.log(str);
*/
// now we will also print with username
/*
function greet(user)
{
    return `Good morning ${user}`
}
var user="Rashid iqbal";
let str=greet(user);
console.log(str);
*/

// function for calculation

function sum(a,b)
{
    return a+b;
}
var d =sum(5,6)
console.log("The sum is",d);

//Function expression
var product= function(num1,num2)
         {
             return num1*num2;
         }
let multiple= product(20,3);
console.log("The product is",multiple);
// console.log("The product is",product(20,3));    // we can also call like this in single line.

//Concept of locar and global varible
let glob = 'global';
function raj()
{
    let loc = "local";        //we can't print loc var from outside the func body because its local.
    console.log(glob);       //here we can access global variable form anywhere.
}
raj(glob)  

