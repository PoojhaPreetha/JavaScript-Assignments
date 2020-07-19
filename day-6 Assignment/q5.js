console.log("total commission");
let cost = Number(prompt("Enter the amount "));

if(cost>=0 && cost<=5000)
{
    console.log((cost*(2/100))+cost);
}
else if(cost>=5001 && cost<=10000)
{
    console.log((cost*(5/100))+cost);
}
else if(cost>=10001 && cost<=20000)
{
    console.log((cost*(7/100))+cost);
}
else
{
    console.log((cost*(10/100))+cost);
}

