// this keeps track of purchases in the main embedded page

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
} else if (money == 10) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
} else if (money == 15) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
} else if (money == 20) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
} else if (money == 25) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
} else if (money == 30) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "none";
} else if (money == 35) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "none";
} else if (money == 40) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "none";
} else if (money == 45) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "none";
} else if (money > 49) {
  potB.style.pointerEvents = "auto";
  potC.style.pointerEvents = "auto";
  potD.style.pointerEvents = "auto";
  boxB.style.pointerEvents = "auto";
  boxC.style.pointerEvents = "auto";
  boxD.style.pointerEvents = "auto";
  cupB.style.pointerEvents = "auto";
  cupC.style.pointerEvents = "auto";
  cupD.style.pointerEvents = "auto";
} else if (money == 0) {
  potB.style.pointerEvents = "none";
  potC.style.pointerEvents = "none";
  potD.style.pointerEvents = "none";
  boxB.style.pointerEvents = "none";
  boxC.style.pointerEvents = "none";
  boxD.style.pointerEvents = "none";
  cupB.style.pointerEvents = "none";
  cupC.style.pointerEvents = "none";
  cupD.style.pointerEvents = "none";
} 

// function to increase points
function increasePoints() {
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
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

// purchase functions
function buypotA() {
  localStorage.setItem("Pota", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
}
function buypotB() {
  localStorage.setItem("Potb", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 10);
}
function buypotC() {
  localStorage.setItem("Potc", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 30);
}
function buypotD() {
  localStorage.setItem("Potd", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 50);
}
function buyboxA() {
  localStorage.setItem("Boxa", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
}
function buyboxB() {
  localStorage.setItem("Boxb", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 10);
}
function buyboxC() {
  localStorage.setItem("Boxc", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 30);
}
function buyboxD() {
  localStorage.setItem("Boxd", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 50);
}
function buycupA() {
  localStorage.setItem("Cupa", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
}
function buycupB() {
  localStorage.setItem("Cupb", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10); 
  localStorage.setItem("money", +money - 10);
}
function buycupC() {
  localStorage.setItem("Cupc", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10);
  localStorage.setItem("money", +money - 30);
}
function buycupD() {
  localStorage.setItem("Cupd", "1");
  var fot = localStorage.getItem("points");
  localStorage.setItem("points", +fot + 10); 
  localStorage.setItem("money", +money - 50);
}
