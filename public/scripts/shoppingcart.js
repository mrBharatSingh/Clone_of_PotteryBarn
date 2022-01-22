var CartData = JSON.parse(localStorage.getItem("ShoppingCartData"));
console.log(CartData);

var totolPrice = 0;
var totalArr = [];
var qtyarr1 = [];
appendCartItem();

function appendCartItem() {
  var shoppogDiv = document.getElementById("cartItemsDiv");
  shoppogDiv.innerHTML = null;

  CartData.forEach((item, index) => {
    var subtotal = item.price;
    // console.log(index)
    totalArr[index] = subtotal;
    qtyarr1[index] = 1;

    var itemDiv = document.createElement("div");
    itemDiv.id = "cartItembox";
    shoppogDiv.append(itemDiv);

    var imgDiv = document.createElement("div");
    imgDiv.id = "imgDiv";
    var pimage = document.createElement("img");
    pimage.src = item.image;

    var removeDiv = document.createElement("div");
    var save = document.createElement("p");
    save.textContent = "Save For Later";
    var removebtn = document.createElement("p");
    removebtn.textContent = "Remove";

    removebtn.addEventListener("click", function () {
      CartData.splice(index, 1);
      totalArr.splice(index, 1);
      qtyarr1.splice(index, 1);
      localStorage.setItem("ShoppingCartData", JSON.stringify(CartData));
      console.log("clicked", CartData);
      appendCartItem();
      total();
    });

    removeDiv.append(save, ` |`, removebtn);
    imgDiv.append(pimage, removeDiv);

    var nameDiv = document.createElement("div");

    var productName = document.createElement("h3");
    productName.textContent = item.name;

    var priceDiv = document.createElement("div");
    priceDiv.id = "priceDiv";
    var price = document.createElement("p");
    price = "$" + item.price;

    var qdiv = document.createElement("div");
    qdiv.id = "qdiv";

    var qinput = document.createElement("input");
    qinput.id = "qinput";
    qinput.placeholder = "1";

    var updateBtn = document.createElement("p");
    updateBtn.innerHTML = "<b>Update</b>";

    //    item.qty=1;

    updateBtn.addEventListener("click", function () {
      subtotal = item.price;
      subtotal *= qinput.value;
      qtyarr1[index] = qinput.value;
      console.log(subtotal);
      totext1.textContent = "$" + subtotal;
      totalArr[index] = subtotal;
      total();
    });

    qdiv.append(qinput, updateBtn);

    var totolDiv = document.createElement("div");

    var totext = document.createElement("p");
    totext.textContent = "Item Total";

    var totext1 = document.createElement("p");
    totext1.textContent = "$" + item.price;

    totolDiv.append(totext, totext1);

    priceDiv.append(price, qdiv, totolDiv);

    var text = document.createElement("p");
    text.innerHTML = "<b>Delivery Estimate:</b>";

    var text2 = document.createElement("p");
    text2.textContent = "Enter Postal Code for a better delivery estimate.";
    nameDiv.append(productName, priceDiv, text, text2);
    itemDiv.append(imgDiv, nameDiv);
  });
}

function total() {
  totolPrice = 0;
  totalArr.forEach((item) => {
    totolPrice += item;
    var disTotal = document.getElementById("cartTotalPrice");
    disTotal.innerHTML = `<b>$ ${totolPrice}</b>`;
  });
}
total();

var disItem = document.getElementById("cartTotalItem");
disItem.textContent = `(${CartData.length} Item)`;
console.log(totolPrice);

var checkoutBtn = document.getElementById("cartCheckout");

checkoutBtn.onclick = function () {
  var localUser = JSON.parse(localStorage.getItem("token"));
  console.log(localUser);

  if (localUser === null) {
    window.location.href = "signup";
  } else {
    console.log(CartData, "bharr");

    var setedCat = [];

    CartData.forEach((item) => {
      obj = {
        product_id: item.id,
        user_id: localUser.id._id,
        image: item.image,
        name: item.name,
        price: item.price,
      };
      setedCat.push(obj);
    });

    console.log(setedCat, "orkese");

    const postCart = async () => {
      try {
        const postCart = await fetch(
          `https://potterybarn-database.herokuapp.com/cart`,
          {
            method: "POST",
            body: JSON.stringify(setedCat),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const postedCartData = await postCart.json();
        console.log(postedCartData, "posted Data");
        localStorage.setItem("ShoppingCartData", JSON.stringify(CartData));
        localStorage.setItem("qtyarr", JSON.stringify(qtyarr1));
        window.location.href = "checkout";
      } catch (error) {
        console.log(error);
      }
    };

    postCart();
  }
};
