const slideContainer=document.getElementById("slides");
const slideImage=document.getElementsByClassName("slide");
var len=slideImage.length;
slideContainer.style.width=len*400+"px";
let index=0;
function prev()
{
    if(index===0){
        index=slideImage.length-1;
    }else{
        index--
    }
    slideContainer.style.transform=`translateX(-${400*index}px)`
}
function next()
{
        if(index<slideImage.length-1){
        index++
    }else{
        index=0
    }
    slideContainer.style.transform=`translateX(-${400*index}px)`
}
var elem_prev=document.getElementById("prev");
var elem_next=document.getElementById("next");
elem_prev.addEventListener('click',prev);
elem_next.addEventListener('click',next);
setInterval(()=>{
    next()
},2*1000)
