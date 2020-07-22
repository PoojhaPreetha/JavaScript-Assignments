console.log("welcome");
function welcome(){
    let name = document.getElementById("name").value;
    let pt = document.getElementById("display")
    pt.value=`Welcome ${name}`;
}

//timer
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText=time;
}
clock();
setInterval(clock,1000);

//dark mode

const dmode=document.getElementById('dark');
dmode.onclick = function changecolor(){
    setTimeout(()=>{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        document.body.style.fontFamily="Helvatica";
    });
}