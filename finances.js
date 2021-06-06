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

// money section
var funds = document.getElementById("funds");

// MONEY STORAGE for account
var money = localStorage.getItem("money");
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
if (money < 30) {
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
if (money < 50) {
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
if (money > 49) {
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
