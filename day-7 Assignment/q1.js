console.log("Filter");
let num = prompt("Enter a positive number");
const arr = [];
for(let i=1;i<=num;i++)
{
    arr.push(i);
}
console.log(arr);
let odd = arr.filter(el=>el%2!=0);
console.log(odd);
let cube = odd.map(el=>el**3);
console.log(cube);
