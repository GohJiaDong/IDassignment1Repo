/* Window alert message when user submit their email to sign up for notifications */
function submissionmessage() {
    alert("You've signed up for notifications!");
    document.getElementById("email").value = "";
}
/**/
function openCart() {
    document.getElementById("cart").style.display = "block";
    document.getElementById("cartsummary").style.display = "block";
  }
  
function closeCart() {
    document.getElementById("cart").style.display = "none";
    document.getElementById("cartsummary").style.display = "none";
  }
/**/
var itemlist = new Array();
var pricelist = new Array ();
let totalcost = 0;
let a = '';


function merch(name, price) {
    this.name = name;
    this.price = price;
    this.addtocart = function() {
        itemlist.push(this.name);
        pricelist.push(this.price);
        totalcost += this.price;

        /* Update the cart */
        var target = document.querySelector(".cart");

        let newUL = document.createElement("ul");
        newUL.classList.add("cartitem");

        if (this.name == 'CHASE ATLANTIC STARS T-SHIRT') {
          a = 'item1.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC RESERVED') {
          a = 'item2.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC GUARENTEED HOODIE') {
          a = 'item3.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC UNLICENSED TOUR T-SHIRT') {
          a = 'item4.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC LIVE IN CONCERT TOUR T-SHIRT') {
          a = 'item5.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC BLUR TOUR T-SHIRT') {
          a = 'item6.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC FACE TOUR HOODIE') {
          a = 'item7.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC FACE CREWNECK TOUR') {
          a = 'item8.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC XAVIER MAYNE SHORTY SAID SHE T-SHIRT') {
          a = 'item9.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic Phases Black Hoodie') {
          a = 'item10.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic BEAUTY IN DEATH Hoodie') {
          a = 'item11.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic Smile Hoodie') {
          a = 'item12.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC COLLEGIATE T-SHIRT') {
          a = 'item13.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC COLLEGIATE CREWNECK SWEATSHIRT') {
          a = 'item14.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC BEAUTY IN DEATH TOUR FACE T-SHIRT') {
          a = 'item15.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC BEAUTY IN DEATH TOUR AUTHENTIC T-SHIRT') {
          a = 'item16.removefromcart()'
        }
        else if (this.name == 'CHASE ATLANTIC - BEAUTY IN DEATH TOUR HOODIE') {
          a = 'item17.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic - New Rari Hoodie') {
          a = 'item18.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic - Ohmami Crewneck') {
          a = 'item19.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic - One Fifty T-shirt') {
          a = 'item20.removefromcart()'
        }
        else if (this.name == 'Chase Atlantic - New Rari T-Shirt') {
          a = 'item21.removefromcart()'
        }
        else if (this.name == 'Molly Hoodie 3D') {
          a = 'item22.removefromcart()'
        }
        else if (this.name == 'Molly Crewneck Sweatshirt') {
          a = 'item23.removefromcart()'
        }
        else if (this.name == 'Out The Roof Hoodie') {
          a = 'item24.removefromcart()'
        }
        else {
          a = 'item25.removefromcart()'
        }

        let newLi3 = document.createElement("li");
        newLi3.classList.add("removeitem");
        let newBt = document.createElement("button");
        newBt.setAttribute('onclick', a);
        let NewC3 = document.createTextNode("X")
        newBt.appendChild(NewC3);
        newLi3.appendChild(newBt);
        newUL.appendChild(newLi3);

        let newLi1 = document.createElement("li");
        newLi1.classList.add("itemname");
        let NewC1 = document.createTextNode(`${this.name}`)
        newLi1.appendChild(NewC1);
        newUL.appendChild(newLi1);

        let newLi2 = document.createElement("li");
        newLi2.classList.add("itemprice");
        let NewC2 = document.createTextNode(`$${this.price}`)
        newLi2.appendChild(NewC2);
        newUL.appendChild(newLi2);

        target.appendChild(newUL);

        /* Update the cart summary */
        var newQty = itemlist.length;
        document.getElementById("itemqty").innerHTML = "Quantity:<br>"+newQty;

        var newGT = totalcost;
        document.getElementById("grandtotal").innerHTML = "Grand Total:<br>$"+newGT;
    };
    this.removefromcart = function() {
        var i = itemlist.indexOf(this.name);
        if (i == -1) {
          return
        }
        itemlist.splice(i, 1);
        pricelist.splice(i, 1);
        totalcost -= this.price;
        /* Update the cart */
        var target = document.querySelector(".cart");
        var target2 = document.querySelectorAll(".cartitem");
        target.removeChild(target2[i+1]);
        /* Update the cart summary */
        var newQty = itemlist.length;
        document.getElementById("itemqty").innerHTML = "Quantity:<br>"+newQty;

        var newGT = totalcost;
        document.getElementById("grandtotal").innerHTML = "Grand Total:<br>$"+newGT;
    };
};

let item1 = new merch('CHASE ATLANTIC STARS T-SHIRT', 25);
let item2 = new merch ('CHASE ATLANTIC RESERVED', 25);
let item3 = new merch ('CHASE ATLANTIC GUARENTEED HOODIE', 55);
let item4 = new merch ('CHASE ATLANTIC UNLICENSED TOUR T-SHIRT', 25);
let item5 = new merch ('CHASE ATLANTIC LIVE IN CONCERT TOUR T-SHIRT', 25);
let item6 = new merch ('CHASE ATLANTIC BLUR TOUR T-SHIRT', 25);
let item7 = new merch ('CHASE ATLANTIC FACE TOUR HOODIE', 55);
let item8 = new merch ('CHASE ATLANTIC FACE CREWNECK TOUR', 45);
let item9 = new merch ('CHASE ATLANTIC XAVIER MAYNE SHORTY SAID SHE T-SHIRT', 25);
let item10 = new merch ('Chase Atlantic Phases Black Hoodie', 55);
let item11 = new merch ('Chase Atlantic BEAUTY IN DEATH Hoodie', 55);
let item12 = new merch ('Chase Atlantic Smile Hoodie', 55);
let item13 = new merch ('CHASE ATLANTIC COLLEGIATE T-SHIRT', 25);
let item14 = new merch ('CHASE ATLANTIC COLLEGIATE CREWNECK SWEATSHIRT', 45);
let item15 = new merch ('CHASE ATLANTIC BEAUTY IN DEATH TOUR FACE T-SHIRT', 25);
let item16 = new merch ('CHASE ATLANTIC BEAUTY IN DEATH TOUR AUTHENTIC T-SHIRT', 25);
let item17 = new merch ('CHASE ATLANTIC - BEAUTY IN DEATH TOUR HOODIE', 55);
let item18 = new merch ('Chase Atlantic - New Rari Hoodie', 55);
let item19 = new merch ('Chase Atlantic - Ohmami Crewneck', 45);
let item20 = new merch ('Chase Atlantic - One Fifty T-shirt', 30);
let item21 = new merch ('Chase Atlantic - New Rari T-Shirt', 30);
let item22 = new merch ('Molly Hoodie 3D', 55);
let item23 = new merch ('Molly Crewneck Sweatshirt', 45);
let item24 = new merch ('Out The Roof Hoodie', 55);
let item25 = new merch ('Chase Atlantic Tee', 25);

