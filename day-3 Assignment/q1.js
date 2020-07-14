var person1 = {name:"Poojha",Age:21,Date_of_birth:"24-10-1998",Hobby:"Painting"};
var person2 = {name:"Preetha",Age:25,Date_of_birth:"24-05-1994",Hobby:"Drawing"};
var person3 = {name:"Priya",Age:20,Date_of_birth:"24-10-1997",Hobby:"Reading"};
console.time("Time is ");
console.log("Hello..Its a start");
console.log(true);
console.log(null);
console.log(90);
console.error("Try to change the folder");
console.warn("You are in a different folder");
console.log(person1,person2,person3);
console.table(person1,person2,person3);
console.table({person1,person2,person3});
console.log("%c Custom Message",'color:Blue;');
console.timeEnd("Time is ");
console.group('tree');
console.log("Neem");
console.error("Its a fruit");
console.warn("Its a tree");
console.groupEnd('tree');
for(let i=0;i<5;i++){ 
    console.count(i); 
}
console.clear();
