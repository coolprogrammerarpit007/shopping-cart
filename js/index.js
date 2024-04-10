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
const clearCart = document.getElementById("clear-cart");

// ***********************************
// State variable

const cartItemPrices = [];
let sum = 0;
let sub = 0;
const selectedItems = [];

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

    // ***************************
    // ***************************

    // Creating a checkbox input element in the product row

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    // checkbox funcunality starts here.

    // *****************************
    // Adding funcutionality to the checkbox

    // function which triggered when item is checked.

    // Event listener when triggered when checkbox is checked and function is called.
    input.addEventListener("change", function (e) {
      const checkboxParentEl = input.parentElement;

      // If item is checked
      if (this.checked) {
        console.log(`Item ${i + 1} is selected!`);
        selectedItems.push(checkboxParentEl);
        console.log(selectedItems);
      }

      // else, Item is unchecked.
      else {
        console.log(`Item ${i + 1} is unchecked now.`);
        selectedItems.pop(checkboxParentEl);
        console.log(selectedItems);
      }
    });

    // ******************************

    // ******************************

    // Checkbox function ends here.

    // ************************
    // ****************************
    // Creating a new delete button

    const button = document.createElement("button");

    // setting class attribute for the dynamically created button
    button.setAttribute("id", "delete-btn" + i);
    button.innerText = "Delete Item";

    // ******************************
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
    div.setAttribute("class", "new-item" + i);
    // ********************

    // Appending h1 and p elements and delete button as well as checkbox input element  as child elements to the parent div element.
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(input);
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

// Selectevely remooving Items from the cart.

const clearShoppingCart = function () {
  for (let i = 0; i < selectedItems.length; i++) {
    productRows.removeChild(selectedItems[i]);

    // finding index of Item in the array.
    let index = selectedItems.indexOf(selectedItems[i]);
    // removing specified item
    selectedItems.splice(index, 1);
    console.log(selectedItems);
  }
};

clearCart.addEventListener("click", clearShoppingCart);

// **********************************
// **********************************
// **********************************
// **********************************

// Code pseudocode / Adding a new feature to the cart and procedure:-

// 1. When a new product is added to the  cart, now a new check box is also created.

// 2. when the check box of a certain product is checked, the parent container of that product is added to the new array'

// 3. similarly, when other products are added that product is also added to the array.

// 4. A new clear cart button, which when triggered clear cart by removing the selected items from the cart.

// *********************************
// *********************************
