console.log("Fetch API");
//getRequest
// fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(data=>console.log(data));
// //makeRequest
// fetch("https://jsonplaceholder.typicode.com/todos",{
//     method:'POST',
//     body:JSON.stringify({
//         userId:3,
//         id:54,
//         title:"quis et est ut voluptate quam dolor",
//         completed:true,

//     })
// }).then(response=>response.json()).then(data=>console.log(data));


async function fetchtodo(){
    const response =await fetch("https://jsonplaceholder.typicode.com/todos");
    const data =await response.json();
    console.log(data);
}
fetchtodo();

let obj1={
    userId:3,
    id:54,
    title:"quis et est ut voluptate quam dolor",
    completed:true,
}
console.log(obj1);
let p = JSON.stringify(obj1);
console.log(p);
let po= JSON.parse(p);
console.log(po);