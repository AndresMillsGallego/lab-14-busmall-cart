/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const tableBody = document.querySelector('tbody');
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tableBody.innerHTML = '';
}

function createElement(type, text,elName, parent) {
  let newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.setAttribute('class', elName);
  parent.appendChild(newElement);
}
// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    createElement('td','X', i, tr);
    createElement('td',cart.items[i].quantity, 'quantity', tr);
    createElement('td', cart.items[i].product, 'product', tr);
    tableBody.appendChild(tr);
    console.log(i);
  }
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table
  let click = event.target.textContent;
  let clickClass = click.className;
  console.log(typeof click)
  if (click === 'X' ){
    cart.removeItem(clickClass);
    cart.saveToLocalStorage();
    renderCart();
    console.log(click, cart.items.length)
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
