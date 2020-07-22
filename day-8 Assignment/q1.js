console.log("array of colors");
var bg = document.getElementById("color");
var color = ["orange","yellow", "violet", "blue", "red", "green"];
var i = 0;
function arrayOfColors() {
  bg.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
}
setInterval(arrayOfColors, 5000);