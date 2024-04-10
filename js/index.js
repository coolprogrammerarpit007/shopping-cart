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
let newSum = 0;
const selectedItems = [];
const selectedItemPrices = [];
let totalSelectedItemPrices = 0;

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
    p.setAttribute("class", "selected-item-price");
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

        // adding parent to array
        selectedItems.push(checkboxParentEl);

        // Pushing the selected Item price to the cart.
        selectedItemPrices.push(Number(p.textContent.replace("$", "")));
      }

      // else, Item is unchecked.
      else {
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
    console.log(cartItemPrices);
    sum = sum + Number(cartItemPrices[i].replace("$", ""));
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

//   ********* BUG****************

const clearShoppingCart = function () {
  let length = selectedItems.length;

  // removing the child element

  for (let i = 0; i < length; i++) {
    productRows.removeChild(selectedItems[i]);
  }

  // removing elements from array
  selectedItems.splice(0);

  // updating the total price of cart.

  for (let i = 0; i < length; i++) {
    totalSelectedItemPrices += selectedItemPrices[i];
  }
  console.log("Total Price: ", totalSelectedItemPrices);
  sum = sum - totalSelectedItemPrices;
  totalSelectedItemPrices = 0;

  newSum = sum;
  // Showing the updated cart total
  document.querySelector(".totalPrice").textContent = newSum;
};

clearCart.addEventListener("click", clearShoppingCart);

// **********************************
// **********************************
