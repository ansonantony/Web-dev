var n = Math.ceil(Math.random()*6);
var m = Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+m+".png");
if(m>n){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
} else if(n>m){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}