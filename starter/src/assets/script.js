/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
{
  name: 'Orange',
  price: 3,
  quantity: 0,
  productId: 1,
  image: 'https://images.unsplash.com/photo-1586439702132-55ce0da661dd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},

{
  name: 'Apple',
  price: 2.50,
  quantity: 0,
  productId: 2,
  image: 'https://images.unsplash.com/photo-1535622380377-1e347c44a12d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},

{
  name: 'Banana',
  price: .85,
  quantity: 0,
  productId: 3,
  image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},

{
  name: 'Cherry',
  price: 4,
  quantity: 0,
  productId: 4,
  image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDl8fHxlbnwwfHx8fHw%3D' 
},

{
  name: 'Mango',
  price: 4.50,
  quantity: 0,
  productId: 5,
  image: 'https://images.unsplash.com/photo-1481349758547-36a0382e3394?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},

{
  name: 'Lime',
  price: .50,
  quantity: 0,
  productId: 6,
  image: 'https://images.unsplash.com/photo-1481349865562-09ea3814bc40?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
];

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

//Helper function
//find() method is finding the first item that matches and then returning it
//productList will take either products object or cart array 
function findProduct(productId, productList){
  return productList.find(function(product) {
    return product.productId === productId
  });
}

function addProductToCart(productId) {

//Find matching Ids of the productId and oject array products with helper function
  let product = findProduct(productId, products)

  //if cart does not include product, the product is being pushed to the cart array
  if (!cart.includes(product)) {
    cart.push(product)
  }
  increaseQuantity(productId)
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  
  //increasing quantity of product in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity + 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  //reduces the quantity of product in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity - 1;
  if (product.quantity === 0) {
    product.quantity = 0
    cart.splice(product.name, 1)
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  //Completely removes item from the cart
  let product = findProduct(productId, cart)
  product.quantity = 0
  cart.splice(product.name, 1)

}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){

  let totalPrice = 0;

  // calculating and returning the total price
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].price;
  }

  return totalPrice;

}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.splice(0, cart.length);
}


/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

//Variable to be used to track total payments
let totalPaid = 0;

function pay(amount) {

  //Amount paid
  totalPaid += amount;

  //remainingBalance subtracts cartTotal from totalPaid
  let remainingBalance = totalPaid - cartTotal();

  //if remainingBalance is >= 0, the totalPaid resets to 0 to allow for additional payment
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
    return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
