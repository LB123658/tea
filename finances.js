// this keeps track of purchases in the main embedded page

// create storage for owned items
localStorage.setItem("Pota", "0");
localStorage.setItem("Potb", "0");
localStorage.setItem("Potc", "0");
localStorage.setItem("Potd", "0");
localStorage.setItem("Boxa", "0");
localStorage.setItem("Boxb", "0");
localStorage.setItem("Boxc", "0");
localStorage.setItem("Boxd", "0");
localStorage.setItem("Cupa", "0");
localStorage.setItem("Cupb", "0");
localStorage.setItem("Cupc", "0");
localStorage.setItem("Cupd", "0");

//create money storage
localStorage.setItem("money", "0");

// create point storage system
localStorage.setItem("points", "0");

// items in store
// teapots in store
var potA = document.getElementById("potA");
var potB = document.getElementById("potB");
var potC = document.getElementById("potC");
var potD = document.getElementById("potD");
// boxes of tea in store
var boxA = document.getElementById("boxA");
var boxB = document.getElementById("boxB");
var boxC = document.getElementById("boxC");
var boxD = document.getElementById("boxD");
// teacups in store
var cupA = document.getElementById("cupA");
var cupB = document.getElementById("cupB");
var cupC = document.getElementById("cupC");
var cupD = document.getElementById("cupD");

// money variable section
var funds = document.getElementById("funds");

// points variable section
var points = localStorage.getItem("points");

// MONEY STORAGE for account
var money = localStorage.getItem("money");

// always show correct money and points amount
funds.innerHTML = money;
document.getElementById("score").innerHTML = points;

// only show items you can afford
if (money < 10) {
  potB.style.pointerEvents = "none";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "none";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "none";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
  potB.style.cursor = "not-allowed";
  potC.style.cursor = "not-allowed";
  potD.style.cursor = "not-allowed";
  boxB.style.cursor = "not-allowed";
  boxC.style.cursor = "not-allowed";
  boxD.style.cursor = "not-allowed";
  cupB.style.cursor = "not-allowed";
  cupC.style.cursor = "not-allowed";
  cupD.style.cursor = "not-allowed";
}
 else if (money < 30) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
  potB.style.cursor = "default";
  potC.style.cursor = "not-allowed";
  potD.style.cursor = "not-allowed";
  boxB.style.cursor = "default";
  boxC.style.cursor = "not-allowed";
  boxD.style.cursor = "not-allowed";
  cupB.style.cursor = "default";
  cupC.style.cursor = "not-allowed";
  cupD.style.cursor = "not-allowed";
}
 else if (money < 50) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "none";
  potB.style.cursor = "default";
  potC.style.cursor = "default";
  potD.style.cursor = "not-allowed";
  boxB.style.cursor = "default";
  boxC.style.cursor = "default";
  boxD.style.cursor = "not-allowed";
  cupB.style.cursor = "default";
  cupC.style.cursor = "default";
  cupD.style.cursor = "not-allowed";
}
 else if (money > 49) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "auto";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "auto";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "auto";
  potB.style.cursor = "default";
  potC.style.cursor = "default";
  potD.style.cursor = "default";
  boxB.style.cursor = "default";
  boxC.style.cursor = "default";
  boxD.style.cursor = "default";
  cupB.style.cursor = "default";
  cupC.style.cursor = "default";
  cupD.style.cursor = "default";
}

// add purchase functions to items
potA.addEventListener("click", buypotA);
potB.addEventListener("click", buypotB);
potC.addEventListener("click", buypotC);
potD.addEventListener("click", buypotD);
boxA.addEventListener("click", buyboxA);
boxB.addEventListener("click", buyboxB);
boxC.addEventListener("click", buyboxC);
boxD.addEventListener("click", buyboxD);
cupA.addEventListener("click", buycupA);
cupB.addEventListener("click", buycupD);
cupC.addEventListener("click", buycupC);
cupD.addEventListener("click", buycupD);

// add point increase function
potA.addEventListener("click", increasePoints);
potB.addEventListener("click", increasePoints);
potC.addEventListener("click", increasePoints);
potD.addEventListener("click", increasePoints);
boxA.addEventListener("click", increasePoints);
boxB.addEventListener("click", increasePoints);
boxC.addEventListener("click", increasePoints);
boxD.addEventListener("click", increasePoints);
cupA.addEventListener("click", increasePoints);
cupB.addEventListener("click", increasePoints);
cupC.addEventListener("click", increasePoints);
cupD.addEventListener("click", increasePoints);

// function to increase points
function increasePoints() {
  localStorage.setItem("points", +points + 1);
}
