var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice1 );

// for second dice6
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩play 1 wins!🏁";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="play 2 wins!🚩🏁";
}
else
{
    document.querySelector("h1").innerHTML="🏁DRAW🏁" ;
}
function mybutton()
{
  location.reload();
}
