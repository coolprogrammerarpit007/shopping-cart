`use strict`;

const items = document.querySelectorAll(`.item`);
const prices = document.querySelectorAll(`.price`);
const addBtn = document.querySelectorAll(`.add-btn`);
const itemPrice = document.querySelector(".price");
const closeBtn = document.querySelector(".close-btn");
const productRows = document.querySelector(".product-row");
const totalPrice = document.querySelector(".totalPrice");
const productCart = document.querySelector(".product-cart");
const showCartBtn = document.querySelector(".show-cart");

// ***********************************
// State variable

const cartItemPrices = [];
let sum = 0;
let sub = 0;

// ***********************************

// Adding functionalit to add items to the cart

for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", (e) => {
    // Creating a new h1 element
    const h1 = document.createElement("h1");

    // dynamically adding the text content
    h1.innerText = `Item ${i + 1}`;

    // **********************

    // dynamically creating a new p element and adding context to it.
    const p = document.createElement("p");
    p.innerText = prices[i].textContent;

    // ****************************
    const button = document.createElement("button");

    // setting class attribute for the dynamically created button
    button.setAttribute("id", "delete-btn" + i);
    button.innerText = "Delete Item";

    // Creating a new delete button

    // *********************************

    // function to remove items
    const removeItem = function () {
      const parent = button.parentElement;
      parent.remove();

      // Showing changed total cart price

      sub = sum - Number(cartItemPrices[i].replace("$", "")); // updating cart after Item removal
      sum = sub; // updating total cart sum

      // Showing the updated cart total
      document.querySelector(".totalPrice").textContent = sub;
      console.log(sub);
    };

    // Event Listener to remove Item
    button.addEventListener("click", removeItem);

    // ********** REMOVE ITEMS ************

    // ************************

    // dynamically creating a new div element

    const div = document.createElement("div");

    // ********************

    // Appending h1 and p elements and delete button as child to the div element
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button);

    // *******************

    // ************************

    // Adding the new item to the product row
    productRows.appendChild(div);

    // pushing price to the price array
    cartItemPrices.push(prices[i].textContent);

    // ****************************

    // Doing sum to the price
    sum = sum + Number(cartItemPrices[i].replace("$", ""));
    console.log(sum);
    // Showing the total price
    totalPrice.textContent = sum;
  });
}

// ***********************************
// ***********************************
// ***********************************

// Show cart function

const openCart = () => {
  productCart.classList.remove("hide-cart");
};

// Close Cart Function

const closeCart = () => {
  productCart.classList.add("hide-cart");
};

// Add event Listener to close the cart

closeBtn.addEventListener("click", closeCart);

// Adding functionality for the show cart

showCartBtn.addEventListener("click", openCart);
