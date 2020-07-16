let num = prompt("Enter a number ");
let fun = function()
{
    if(num%2==0)
    {
        return `The number entered is ${num} and Number is even`;
    }
    else
    {
        return `The number entered is ${num} and Number is odd`;
         
    }
}
let r = fun();
console.log(r);