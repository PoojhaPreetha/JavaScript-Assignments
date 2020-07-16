//ternary operator
let marrk = prompt("Enter your mark: ");
let r = (marrk>=90)? `Marks are ${marrk} and grade is S.`:
(marrk<90 && marrk>=80)? `Marks are ${marrk} and grade is A.`:
(marrk<80 && marrk>=70)? `Marks are ${marrk} and grade is B.`:
(marrk<70 && marrk>=60)? `Marks are ${marrk} and grade is C.`:
(marrk<60 && marrk>=50)? `Marks are ${marrk} and grade is D.`:
(marrk<50 && marrk>=40)? `Marks are ${marrk} and grade is E.`:
`Marks are ${marrk} and grade is F.`;
console.log(r);