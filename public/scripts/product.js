var cartArrdata = JSON.parse(localStorage.getItem("ShoppingCartData"));

var pdata = JSON.parse(localStorage.getItem("singleProductData"));
console.log(pdata);

//    c=pdata.img1

function cartTlength() {
  var cartlen = document.getElementById("CartIconP");
  var cartArrdataxx = JSON.parse(localStorage.getItem("ShoppingCartData"));
  cartlen.textContent = "Cart(" + cartArrdataxx.length + ")";
}

for (var bh = 1; bh <= 12; bh++) {
  var hh = "img" + bh;
  // console.log(pdata["img"+bh])
  var b1 = document.getElementById("hrefImg" + bh);
  b1.href = pdata["img" + bh];
  var b2 = document.getElementById("srcImg" + bh);
  b2.src = pdata["img" + bh];
}

var bigimg = document.getElementById("zooming");
bigimg.src = pdata.img1;

var bhProductName = document.getElementById("bhProductName");
bhProductName.textContent = pdata.name;

var bhprice = document.getElementById("bhprice");
bhprice.textContent = pdata.price;

var bhprice1 = document.getElementById("bhprice1");
bhprice1.textContent = pdata.price;

addcflag = true;

var addtoCartbtn = document.getElementById("box3");
addtoCartbtn.onclick = function () {
  console.log("clickd");
  var bhname = pdata.name;
  var bhimege = pdata.img1;
  var bhprice = pdata.price;

  bhprice = bhprice.split("-");
  bhprice = bhprice[0];

  var ans = "";

  for (var x = 0; x < bhprice.length; x++) {
    if (bhprice[x] == "$" || bhprice[x] == ",") {
    } else {
      ans += bhprice[x];
    }
  }
  ans = +ans;

  var obj = {
    image: bhimege,
    name: bhname,
    price: ans,
    id: "#84-687" + Math.floor(1000 + Math.random() * 9000),
  };
  cartArrdata.forEach((item) => {
    if (item.name == bhname) {
      addcflag = false;
    }
  });

  if (addcflag) {
    cartArrdata.push(obj);

    localStorage.setItem("ShoppingCartData", JSON.stringify(cartArrdata));
    cartTlength();
    alert("Product Successfully Added to Cart ");
  } else {
    alert("Product is already in cart");
  }
};

$(document).ready(function () {
  $(".thumb").scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#i").fadeIn();
    } else {
      $("#i").fadeOut();
    }
  });
  $("#i").click(function () {
    $("body, ul").animate({ scrollTop: 0 }, 100);
    return false;
  });
});

// console.log(x.length)
//  document.getElementById('i1').addEventListener('click',Slidern)
// var slideIndex=0;
// showDiv(slideIndex)
// function plusDiv(n){
//     showDiv(slideIndex +=n)
// }
// function showDiv(n){

//     var i;
//     var x=document.getElementsByClassName('slideImg1')
//     console.log(x.length)
//     console.log(n)
//     if(n>x.length){
//         slideIndex=1
//     }
//     // if(n<1){
//     //     slideIndex=x.length
//     // }
//     for(i=0;i<x.length;i=i++){
//         x[i].style.display ='none';
//     }
//     x[slideIndex+1].style.display='block'
// }
let buttonR = document.getElementById("i1");
buttonR.addEventListener("click", function () {
  document.getElementById("hrSlider").scrollLeft += 317.5;
});
let buttonL = document.getElementById("i2");
buttonL.addEventListener("click", function () {
  document.getElementById("hrSlider").scrollLeft -= 317.5;
});
$(document).ready(function () {
  $("#hrSlider").scroll(function () {
    if ($(this).scrollLeft() > 100) {
      $("#i2").fadeIn();
    } else {
      $("#i2").fadeOut();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
$(document).ready(function () {
  $("#hrSlider").scroll(function () {
    if ($(this).scrollLeft() > 317 * 6) {
      $("#i1").fadeOut();
    } else {
      $("#i1").fadeIn();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
let buttonR1 = document.getElementById("i3");
buttonR1.addEventListener("click", function () {
  document.getElementById("hrSlider1").scrollLeft += 350 * 3.2;
});
let buttonL1 = document.getElementById("i4");
buttonL1.addEventListener("click", function () {
  document.getElementById("hrSlider1").scrollLeft -= 350 * 3.2;
});
$(document).ready(function () {
  $("#hrSlider1").scroll(function () {
    if ($(this).scrollLeft() > 100) {
      $("#i4").fadeIn();
    } else {
      $("#i4").fadeOut();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
$(document).ready(function () {
  $("#hrSlider1").scroll(function () {
    if ($(this).scrollLeft() > 350 * 7) {
      $("#i3").fadeOut();
    } else {
      $("#i3").fadeIn();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
let main = document.getElementById("iiQuantityM");

let c = 0;
document.getElementById("iiQuantity1").addEventListener("click", funct);
function funct() {
  c--;
  if (c > 0) {
    main.innerText = c;
    // console.log(c)
  } else {
    c = 0;
    main.innerText = c;
    //   console.log(c)
  }
}
document.getElementById("iiQuantity2").addEventListener("click", funct1);
function funct1() {
  c++;
  main.innerText = c;
  // console.log(c)
}
let main1 = document.getElementById("iiQuantityM1");

let c1 = 0;
document.getElementById("iiQuantity11").addEventListener("click", funct2);
function funct2() {
  c1--;
  if (c1 > 0) {
    main1.innerText = c1;
    // console.log(c)
  } else {
    c1 = 0;
    main1.innerText = c1;
    //   console.log(c)
  }
}
document.getElementById("iiQuantity21").addEventListener("click", funct3);
function funct3() {
  c1++;
  main1.innerText = c1;
  // console.log(c)
}

console.log(c);
let buttonR9 = document.getElementById("i5");
buttonR9.addEventListener("click", function () {
  document.getElementById("hrSlider2").scrollLeft += 317.5 * 4;
});
let buttonL9 = document.getElementById("i6");
buttonL9.addEventListener("click", function () {
  document.getElementById("hrSlider2").scrollLeft -= 317.5 * 4;
});
$(document).ready(function () {
  $("#hrSlider2").scroll(function () {
    if ($(this).scrollLeft() > 100) {
      $("#i6").fadeIn();
    } else {
      $("#i6").fadeOut();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
$(document).ready(function () {
  $("#hrSlider2").scroll(function () {
    if ($(this).scrollLeft() > 310 * 16) {
      $("#i5").fadeOut();
    } else {
      $("#i5").fadeIn();
    }
  });
  // $('#i').click(function(){
  //     $('body, ul').animate({scrollTop:0},100);
  //     return false;
  // });
});
