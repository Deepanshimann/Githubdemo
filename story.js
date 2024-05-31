var fullScreen=document.querySelector("#full-screen")
var storiyan=document.querySelector("#storiyan");
var arr=[
{dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1612904370780-fbc1a5a4f46d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
story:"https://images.unsplash.com/photo-1623039497550-c4f2ccc7b875?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1525348371953-ac094a7e70be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
story:"https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1516063131707-07d5952d90cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
story:"https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
story:"https://plus.unsplash.com/premium_photo-1671586881977-1ad3488a45e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"}
]

var clutter="";
arr.forEach(function(elem,idx){
   clutter+=`<div class="story">
   <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
fullScreen.style.display="block";
fullScreen.style.backgroundImage=`url(${arr[dets.target.id].story})`
setTimeout(function(){
    fullScreen.style.display="none";
},3000)
})