var btn=document.querySelector(".btn-primary");
var frns=document.querySelector("h5");
var dill=document.querySelector("#heart");
var dill2=document.querySelector("#heart2")
var post=document.querySelector(".card2");

var flag=0;

    btn.addEventListener("click",function(){
        if(flag==0){
        frns.innerHTML="Friends";
        frns.style.color="green";
        btn.innerHTML="Remove";
        btn.style.backgroundColor="grey";
        flag=1;
        }else{
            frns.innerHTML="Stranger";
        frns.style.color="red";
        btn.innerHTML="Accept";
        btn.style.backgroundColor="blue";
        flag=0;
        }
    });
    dill.addEventListener("click", function(){
        if (dill.classList.contains("ri-heart-3-line")) {
            dill.classList.remove("ri-heart-3-line");
            dill.classList.add("ri-heart-3-fill");
            dill.style.color = "red";
            dill2.style.transform="translate(-50%,-50%) scale(1)";
            dill2.style.opacity="0.8";
            setTimeout(function(){
                dill2.style.opacity="0";
            },1000)
            setTimeout(function(){
                dill2.style.transform="translate(-50%,-50%) scale(0.5)";
            },1000)
        } else {
            dill.classList.remove("ri-heart-3-fill");
            dill.classList.add("ri-heart-3-line");
            dill.style.color = "black";
        }
    });
    post.addEventListener("dblclick",function(){
        dill2.style.transform="translate(-50%,-50%) scale(1)";
        dill2.style.opacity="0.8";
        setTimeout(function(){
            dill2.style.opacity="0";
        },1000)
        setTimeout(function(){
            dill2.style.transform="translate(-50%,-50%) scale(0.5)";
        },1000)
   })

  









