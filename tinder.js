var users=[
    {
profilePic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
displayPic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
location:"Delhi,India",
name:"Satvikta",
age:21,
interests:[{
    icon:`<i class="ri-music-fill"></i>`,
    interest:"music"
},{
    icon:`<i class="ri-quill-pen-fill"></i>`,
    interest:"writing" 
},{
    icon:`<i class="ri-plant-fill"></i>`,
    interest:"gardening"
}
],
bio:"Imperfection is beauty, madness is genius, and it’s better to be absolutely ridiculous than absolutely boring.",
isFriend:null
},
{
    profilePic:"https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location:"Texas,US",
    name:"Sharon",
    age:20,
    interests:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music"
    },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"writing" 
    },{
        icon:`<i class="ri-plant-fill"></i>`,
        interest:"gardening"
    }],
    bio:"No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
    isFriend:null
    },
    {
        profilePic:"https://gallery.greatandhra.com/upload/20842/images/291877444_563154828582592_5573936762538240075_n1656856166.jpg",
        displayPic:"https://www.filmistreet.com/wp-content/uploads/Janhvi-Kapoor-2.jpg",
        location:"Glasgow,Scotland",
        name:"Nikki",
        age:23,
        interests:[{
            icon:`<i class="ri-reactjs-line"></i>`,
                interest:"coding"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing" 
        },{
            icon:`<i class="ri-music-fill"></i>`,
            interest:"music" 
        }],
        bio:"You only live once, but if you do it right, once is enough.” - Mae West",
        isFriend:null
        },
        {
            profilePic:"https://external-preview.redd.it/v6oM6NDixuZHVZ_YXMQrd55F6W9EBZCvPC1BwASvhV0.jpg?auto=webp&s=e74aeb7d7a0b163f676a9c77f385ddb4372462e3",
            displayPic:"https://tse2.mm.bing.net/th/id/OIP.d7SFqG5AA_NKYUIDAwecsgHaKM?rs=1&pid=ImgDetMain",
            location:"London,UK",
            name:"Kathorine",
            age:24,
            interests:[{
                icon:`<i class="ri-slideshow-3-fill"></i>`,
                interest:"watching"
            },{ 
                icon:`<i class="ri-music-fill"></i>`,
                interest:"music" 
            },{
                icon:`<i class="ri-reactjs-line"></i>`,
                interest:"coding"
            }],
            bio:"Do what you love, and the money will follow.” - Marsha Sinetar",
            isFriend:null
            },
];
function select(elem){
    return document.querySelector(elem);
}
var curr=0;
let isAnimating=false;
function setData(index){
    select(".prflimg img").src =users[index].profilePic;
    select(".location h3").textContent=users[index].location;
    select(".name").textContent=users[index].name;
    select(".age").textContent=users[index].age;
    var clutter="";
    users[index].interests.forEach(function(interests){
        clutter+=` <div class="tag flex items-center bg-white/30 px-3 py-1  rounded-full gap-3">
       ${interests.icon}
        <h3 class="text-sm tracking-tighter capitalize">${interests.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML=clutter;
    select(".bio p").textContent=users[index].bio;
}
(function setInitial(){
    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1]?.displayPic;
   setData(curr);
    curr=2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating=true;
  let tl=gsap.timeline({
    onComplete: function() {
        isAnimating=false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");
    
        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");
    
        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main,{
            scale:1,
            opacity:1
        
        })
        if(curr===users.length)curr=0;
        select(".maincard img").src=users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
  }
});
    

  tl.to(".maincard",{
    scale:1.1,
    opacity:0,
    ease:Circ,
    duration:1.1
  },"a")
  .from(".incomingcard",{
    scale:.9,
    opacity:0,
    ease:Circ,
    duration:1.1
  },"a")
}
};

let deny= select(".deny");
let accept= select(".accept");
deny.addEventListener("click",function(){
 imageChange();
 setData(curr-1)
 gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5
});

});
accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1)
    gsap.from(".details .element", {
       y: "100%",
       stagger: 0.06,
       ease: Power4.easeInOut,
       duration: 1.5
   });
})
(function containerCreator() {
    document.querySelectorAll(".element")
        .forEach(function(element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        });
})();

