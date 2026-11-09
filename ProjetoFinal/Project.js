const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");

const products = document.querySelectorAll(".product-card");

const cartCount = document.querySelector("#cart-count");

const noResults = document.querySelector("#no-results");

let cart = 0;

const buttons = document.querySelectorAll(".add-button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;

        const productName = button.dataset.name;

        alert(productName + " foi adicionado ao carrinho!");

    });

});

function filterProducts() {

    const searchText = searchInput.value.toLowerCase();

    const selectedCategory = categoryFilter.value;

    let visibleProducts = 0;

    products.forEach((product) => {

        const name = product.querySelector("h3").textContent.toLowerCase();

        const category = product.dataset.category;

        const matchesName = name.includes(searchText);

        const matchesCategory =
            selectedCategory === "todos" ||
            category === selectedCategory;

        if (matchesName && matchesCategory) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });

    noResults.hidden = visibleProducts !== 0;

}

searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);
