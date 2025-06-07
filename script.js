let cart = [];

function addToCart(item, price) {
    cart.push({
        item,
        price
    });
    alert(item + " added to cart!");
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const payBtn = document.getElementById("payBtn");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.item} - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₹${total}`;
    payBtn.style.display = cart.length > 0 ? "block" : "none";
}
function showPaymentPage() {
    display('paymentSection');
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = "<h3>Order Summary:</h3>";
    let total = 0;

    cart.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.item} - ₹${item.price}`;
        orderSummary.appendChild(p);
        total += item.price;
    });
    const totalEl = document.createElement("h4");
    totalEl.textContent = `Total: ₹${total}`;
    orderSummary.appendChild(totalEl);
}
function placeOrder(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    alert(`Order placed successfully!\n\nName: ${name}\nPhone: ${phone}\nThank you for shopping with us!`);

    // Clear everything
    cart = [];
    document.getElementById("orderForm").reset();
    updateCartDisplay();
    display('section 0');
}
function display(sectionId) {
    const sections = ['section main', 'section 0', 'section 1', 'section Laptops', 'section cosmetic', 'section Mobile', 'section about', 'section Services', 'section follow', 'paymentSection'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = id === sectionId ? 'block' : 'none';
        }
    });
    if (sectionId === 'section 0') {
        updateCartDisplay();
    }
}