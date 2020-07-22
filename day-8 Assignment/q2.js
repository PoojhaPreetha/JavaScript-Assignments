console.log("tables");
function print(){
    let num;
    num=Number(document.getElementById('number').value);
    for(let i=1; i<=15; i++){
        let p= document.getElementById('print');
        p.innerHTML += `${num} * ${i} =  ${(num*i)} <br/> `;
    }
}