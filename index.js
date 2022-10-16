var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png" ;
var image="images/"+randomImage
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image)
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber2+".png" ;
var image="images/"+randomImage
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",image)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins !";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Match Tie !";
}
else{
    document.querySelector("h1").innerHTML="player 2 wins !";
}