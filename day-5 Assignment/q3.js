//using conditional statement
let mark = prompt("Enter your mark: ");
if(mark>=90)
{
    console.log(`Marks are ${mark} and grade is S.`);
}
else if(mark<90 && mark>=80)
{
    console.log(`Marks are ${mark} and grade is A.`);
}
else if(mark<80 && mark>=70)
{
    console.log(`Marks are ${mark} and grade is B.`);
}
else if(mark<70 && mark>=60)
{
    console.log(`Marks are ${mark} and grade is C.`);
}
else if(mark<60 && mark>=50)
{
    console.log(`Marks are ${mark} and grade is D.`);
}
else if(mark<50 && mark>=40)
{
    console.log(`Marks are ${mark} and grade is E.`);
}
else
{
    console.log(`Marks are ${mark} and grade is F.`);
}
