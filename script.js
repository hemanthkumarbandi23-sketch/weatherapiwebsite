let k=document.getElementById("themeToggle");
let u=document.getElementById("seeker");
let flag=0;
k.addEventListener("change",function() {
 if(flag==0){
    document.body.style.backgroundImage = "url('background2.jpg')";
    u.style.color="white";
    flag=1;
 }
 else{
document.body.style.backgroundImage = "url('background1.jpg')";
u.style.color="black";
    flag=0;
 }
})