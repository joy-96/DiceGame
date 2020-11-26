
var randomNumber1, randomNumber2;
var count = 0;

var btn = document.querySelectorAll("button")[1];
      btn.disabled = true;

function imageNo1()
{
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log("fUn 1 " + randomNumber1)
  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomImageSourse1 = "images/" + randomDiceImage1;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSourse1);
  helper();

  var btn = document.querySelectorAll("button")[0];
        btn.disabled = true;

  var btn = document.querySelectorAll("button")[1];
        btn.disabled = false;
}


function imageNo2()
{
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log("fUn 2 " + randomNumber2)
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSourse2 = "images/" + randomDiceImage2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSourse2);
  helper();
  check();
  var btn = document.querySelectorAll("button")[1];
        btn.disabled = true;

}

function helper(){
  count += 1;
}

function check(){
   count = 0;
   result();
}

function result()
{

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win..!";
    document.querySelector("h4").innerHTML = "(Refresh website for new round)";
  }
  else if (randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩 Player 2 win..!";
    document.querySelector("h4").innerHTML = "(Refresh website for new round)";
  }
  else
  {
    document.querySelector("h1").innerHTML = "Draw..!";
    document.querySelector("h4").innerHTML = "(Refresh website for new round)";
  }

}
