const API_URL = "http://localhost:5000/api/products";

let allProducts = [];
let cart = JSON.parse(localStorage.getItem('unify_cart')) || [];

const productsContainer = document.getElementById("products");
const loader = document.getElementById("loader");

async function fetchProducts(query = "") {
  loader.classList.remove("hidden");
  productsContainer.innerHTML = "";

  const res = await fetch(`${API_URL}${query}`);
  const data = await res.json();
  allProducts = data;

  displayProducts(data);
  loader.classList.add("hidden");
}

function displayProducts(products) {
  if (products.length === 0) {
    productsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  productsContainer.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product._id}', this)">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id, btn) {
  const existing = cart.find(item => item._id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    const product = allProducts.find(p => p._id === id);
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();

  btn.classList.add("bounce");
  setTimeout(() => btn.classList.remove("bounce"), 300);
}

function saveCart() {
  localStorage.setItem("unify_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty 🛒</p>";
    cartTotal.innerText = "";
    cartCount.innerText = 0;
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <p>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</p>
    `;
  });

  cartTotal.innerText = "Total: ₹" + total;
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function filterCategory(category) {
  if (category === "all") {
    fetchProducts();
  } else {
    fetchProducts(`?category=${category}`);
  }
}

function searchProducts() {
  const value = document.getElementById("searchInput").value;
  fetchProducts(`?search=${value}`);
}

async function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const response = await fetch("http://localhost:5000/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customer: { name: "Neha", email: "neha@email.com" },
      items: cart,
      total
    })
  });

  const data = await response.json();
  alert("Order placed! Order ID: " + data.orderId);

  cart = [];
  saveCart();
  updateCartUI();
}

updateCartUI();
fetchProducts();