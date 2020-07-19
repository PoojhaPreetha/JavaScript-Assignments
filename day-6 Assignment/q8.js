console.log("Arrow functions");
let ask=(question,yes,no) => {if(confirm(question)) yes()
else no();
}
let t  = ask("Do you agree?",function(){alert("You agreed.");},function(){alert("You cancelled the execution.")});
console.log(t);