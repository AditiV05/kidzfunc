document.addEventListener("DOMContentLoaded", function () {
  let cartItems = {};
  let totalAmount = 0;

  function updateCart(bookId, price) {
    if (cartItems[bookId] === undefined) {
      cartItems[bookId] = 1;
    } else {
      cartItems[bookId]++;
    }

    totalAmount += price;

    document.getElementById("cart-value").innerText = Object.values(
      cartItems
    ).reduce((acc, curr) => acc + curr, 0);
  }

  const addToCartButtons = document.querySelectorAll(".button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = button.id;
      const priceElement = button.previousElementSibling;
      const price = parseFloat(priceElement.innerText.substring(1));

      updateCart(bookId, price);
    });
  });

  const cartButton = document.getElementById("cart");
  cartButton.addEventListener("click", function () {
    console.log("Order Details:");
    for (const [bookId, quantity] of Object.entries(cartItems)) {
      const bookElement =
        document.getElementById(bookId).previousElementSibling;
      const bookTitle = bookElement.querySelector("h3").innerText;
      console.log(`${bookTitle} - Quantity: ${quantity}`);
    }
    console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
  });
});
