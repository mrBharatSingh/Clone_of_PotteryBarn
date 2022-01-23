// import wholeNav from './navMenu.js'

import {
  wholeNav,
  footer,
  ourValues,
  sustainability,
  design,
  inspiration,
  newNow,
  collaborations,
} from "./navMenu.js";

var wholeNavDiv = document.getElementById("wholeNav");
wholeNavDiv.innerHTML = wholeNav();

var footerdiv = document.getElementById("mainfooter");
footerdiv.innerHTML = footer();

//second nav bar varibles
var Values = document.getElementById("navValues");
var Sustain = document.getElementById("navSustain");
var Design = document.getElementById("navDesign");
var Inspir = document.getElementById("navInspir");
var Newnow = document.getElementById("navNewnow");
var Bestsell = document.getElementById("navBestsell");
var Coll = document.getElementById("navColl");

var displayThird = document.getElementById("navSecondHover");
var displayThird1 = document.getElementById("navSecondDiv");

// import  {ourValues, sustainability, design, inspiration, newNow, collaborations} from './navMenu.js'
// console.log(displayThird)

var bodyx = document.querySelector("section");
console.log(bodyx);

bodyx.onmouseover = function () {
  setTimeout(() => {
    displayThird.style.display = "none";
  }, 1000);
};
displayThird1.onmouseover = function () {
  // displayThird.innerHTML=null
  // displayThird.innerHTML=ourValues()
  setTimeout(() => {
    displayThird.style.display = "none";
  }, 1000);
};

// displayThird.onmouseout=function(){
//     // displayThird.innerHTML=null
//     displayThird.innerHTML=ourValues()
//     displayThird.style.display="none"

// }

Values.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = ourValues();
    displayThird.style.display = "block";
  }, 500);
};

Sustain.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = sustainability();
    displayThird.style.display = "block";
  }, 500);
};

Design.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = design();
    displayThird.style.display = "block";
  }, 500);
};

Inspir.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = inspiration();
    displayThird.style.display = "block";
  }, 500);
};

Newnow.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = newNow();
    displayThird.style.display = "block";
  }, 500);
};

// Bestsell.onmouseover=function(){
//     displayThird.innerHTML=null
//     displayThird.innerHTML=
//     displayThird.style.display="flex"
// }

Coll.onmouseover = function () {
  setTimeout(() => {
    displayThird.innerHTML = null;
    displayThird.innerHTML = collaborations();
    displayThird.style.display = "flex";
  }, 500);
};

var fFurniture = document.getElementById("navfFurniture");
var fOutdoor = document.getElementById("navfOutdoor");
var fBedding = document.getElementById("navfBedding");
var fBath = document.getElementById("navfBath");
var fRugs = document.getElementById("navfRugs");
var fWindows = document.getElementById("navfWindows");
var fLighting = document.getElementById("navfLighting");
var fPillows = document.getElementById("navfPillows");
var fMirrors = document.getElementById("navfMirrors");
var fTabletop = document.getElementById("navfTabletop");
var fOrganization = document.getElementById("navfOrganization");
var fHolidays = document.getElementById("navfHolidays");
var fGifts = document.getElementById("navfGifts");
var fSale = document.getElementById("navfSale");

fFurniture.onclick = function () {
  window.location.href = "furniture";
};

var forthDisplay = document.getElementById("navFourthHover");

import {
  furniture,
  outdoor,
  bedding,
  bath,
  rugs,
  windows,
  lighting,
  pillows,
  mirrors,
  tabletop,
  organization,
  holidays,
  gifts,
  sale,
} from "./navMenu.js";

fFurniture.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;

    forthDisplay.innerHTML = furniture();
  }, 500);
};

fOutdoor.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = outdoor();
  }, 500);
};
fBedding.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = bedding();
  }, 500);
};
fBath.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = bath();
  }, 500);
};
fRugs.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = rugs();
  }, 500);
};
fWindows.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = windows();
  }, 500);
};
fLighting.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = lighting();
  }, 500);
};
fPillows.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = pillows();
  }, 500);
};
fMirrors.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = mirrors();
  }, 500);
};
fTabletop.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = tabletop();
  }, 500);
};
fOrganization.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = organization();
  }, 500);
};
fHolidays.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = holidays();
  }, 500);
};
fGifts.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = gifts();
  }, 500);
};
fSale.onmouseover = function () {
  setTimeout(() => {
    forthDisplay.innerHTML = null;
    forthDisplay.innerHTML = sale();
  }, 500);
};

var gohome = document.getElementById("potteryLogo");

gohome.onclick = function () {
  window.location.href = "index";
};

var cartIcon = document.getElementById("CartIcon");
cartIcon.onclick = function () {
  window.location.href = "shoppingcart";
};

var cartlen = document.getElementById("CartIconP");
function cartTlength() {
  var cartArrdataxx = JSON.parse(localStorage.getItem("ShoppingCartData"));
  cartlen.textContent = "Cart(" + cartArrdataxx.length + ")";
}
cartTlength();

var fistdivClick = document.getElementById("navThirdDiv");

fistdivClick.onclick = () => {
  window.location.href = "furniture";
};

var fist1divClick = document.getElementById("navSecondHover");
console.log(fist1divClick, "helllo");

fist1divClick.onclick = () => {
  window.location.href = "furniture";
};

var secondDivClick = document.getElementById("navFourthDiv");

secondDivClick.onclick = () => {
  window.location.href = "furniture";
};
