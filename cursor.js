var main=document.querySelector("#main");
var crsr=document.querySelector(".cursor");
main.addEventListener("mousemove",function(phool){
    crsr.style.left=phool.x+"px"//do position absolute for sure
    crsr.style.top=phool.y+"px";
})