// Array of products
const products = [
  {
    name: "Cherry",
    price: 1.99,
    quantity: 0,
    productId: 101,
    image: "./images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 0.99,
    quantity: 0,
    productId: 102,
    image: "./images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 1.99,
    quantity: 0,
    productId: 103,
    image: "./images/strawberry.jpg",
  },
];

// Finds product in array by productId
function findProductById(productId) {
  return products.find((product) => product.productId === productId);
}

// Empty array to hold the items in the cart for the user
const cart = [];

// Adds products to cart using "Add to Cart" button
function addProductToCart(productId) {
  const product = findProductById(productId);
  if (!product) return;
  product.quantity++;
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

// Increases product quantity using "+" button or "Add to Cart"
function increaseQuantity(productId) {
  const product = findProductById(productId);
  if (!product) return;
  product.quantity++;
}

// Decreases product quantity using "-" button and removes product if quantity is 0
function decreaseQuantity(productId) {
  const product = findProductById(productId);
  if (!product) return;
  if (product.quantity === 1) {
    removeProductFromCart(productId);
  } else {
    product.quantity--;
  }
}

// Removes product from cart and sets quantity to 0 using "Remove" button
function removeProductFromCart(productId) {
  const product = findProductById(productId);
  if (!product) return;
  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
}

// Returns total cost of products in cart
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// Function that empties the products from the cart
function emptyCart() {
  cart.length = 0;
}

// Accepts amount paid by customer and returns change or remaining balance
let totalPaid = 0;
function pay(amount) {
  totalPaid += amount;
  const difference = totalPaid - cartTotal();
  if (difference >= 0) {
    const change = difference;
    totalPaid = 0;
    return change;
  }
  return difference;
}

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
};
