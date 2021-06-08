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


// item price tags 
var potaprice = document.getElementById("potaprice");
var potbprice = document.getElementById("potbprice");
var potcprice = document.getElementById("potcprice");
var potdprice = document.getElementById("potdprice");

var boxaprice = document.getElementById("boxaprice");
var boxbprice = document.getElementById("boxbprice");
var boxcprice = document.getElementById("boxcprice");
var boxdprice = document.getElementById("boxdprice");

var cupaprice = document.getElementById("cupaprice");
var cupbprice = document.getElementById("cupbprice");
var cupcprice = document.getElementById("cupcprice");
var cupdprice = document.getElementById("cupdprice");

// local storage to see if you own items
var Pota = localStorage.getItem("Pota");
var Potb = localStorage.getItem("Potb");
var Potc = localStorage.getItem("Potc");
var Potd = localStorage.getItem("Potd");

var Boxa = localStorage.getItem("Boxa");
var Boxb = localStorage.getItem("Boxb");
var Boxc = localStorage.getItem("Boxc");
var Boxd = localStorage.getItem("Boxd");

var Cupa = localStorage.getItem("Cupa");
var Cupb = localStorage.getItem("Cupb");
var Cupc = localStorage.getItem("Cupc");
var Cupd = localStorage.getItem("Cupd");

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

if (Pota == 1) {
  potaprice.innerHTML = "Owned";
  potA.removeEventListener("click", buypotA);
  potA.style.pointerEvents = "none";
} 
if (Potb == 1) {
  potbprice.innerHTML = "Owned";
  potB.removeEventListener("click", buypotB);
  potB.style.pointerEvents = "none";
} 
if (Potc == 1) {
  potcprice.innerHTML = "Owned";
  potC.removeEventListener("click", buypotC);
  potC.style.pointerEvents = "none";
} 
if (Potd == 1) {
  potdprice.innerHTML = "Owned";
  potD.removeEventListener("click", buypotD);
  potD.style.pointerEvents = "none";
} 
if (Boxa == 1) {
  boxaprice.innerHTML = "Owned";
  boxA.removeEventListener("click", buyboxA);
  boxA.style.pointerEvents = "none";
} 
if (Boxb == 1) {
  boxbprice.innerHTML = "Owned";
  boxB.removeEventListener("click", buyboxB);
  boxB.style.pointerEvents = "none";
} 
if (Boxc == 1) {
  boxcprice.innerHTML = "Owned";
  boxC.removeEventListener("click", buyboxC);
  boxC.style.pointerEvents = "none";
} 
if (Boxd == 1) {
  boxdprice.innerHTML = "Owned";
  boxD.removeEventListener("click", buyboxD);
  boxD.style.pointerEvents = "none";
} 
if (Cupa == 1) {
  cupaprice.innerHTML = "Owned";
  cupA.removeEventListener("click", buycupA);
  cupA.style.pointerEvents = "none";
} 
if (Cupb == 1) {
  cupbprice.innerHTML = "Owned";
  cupB.removeEventListener("click", buycupB);
  cupB.style.pointerEvents = "none";
} 
if (Cupc == 1) {
  cupcprice.innerHTML = "Owned";
  cupC.removeEventListener("click", buycupC);
  cupC.style.pointerEvents = "none";
} 
if (Cupd == 1) {
  cupdprice.innerHTML = "Owned";
  cupD.removeEventListener("click", buycupD);
  cupD.style.pointerEvents = "none";
} 
