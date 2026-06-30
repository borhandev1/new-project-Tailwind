const card=document.getElementById("liquid-card");
const light=document.getElementById("glass-light");

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

light.style.left=(x-160)+"px";

light.style.top=(y-160)+"px";

});

card.addEventListener("mouseleave",()=>{

light.style.left="-40%";
light.style.top="-40%";

});