var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(cursordata){
   crsr.style.left = cursordata.x+"px";
   crsr.style.top = cursordata.y+"px";
})

