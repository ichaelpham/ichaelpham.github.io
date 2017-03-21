function game() {
var answer;
var randomNum = Math.random();
if (randomNum <= 0.83){
  answer = "You live.";
}
else {
  answer = "You die.";
}

document.getElementById("result").innerHTML = answer;
document.getElementById("reset").innerHTML = "Try again?";
document.getElementById("button").style.textDecoration = "line-through";
document.getElementById("title").style.textDecoration = "line-through";
document.getElementById("button").style.pointerEvents = "none";
console.log(randomNum)
};

function refresh() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("reset").innerHTML = "";
  document.getElementById("button").style.pointerEvents = "auto";
  document.getElementById("title").style.textDecoration = "none";
  document.getElementById("button").style.textDecoration = "none";
};
