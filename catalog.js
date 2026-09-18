const products = [
    {
        id: 1,
        name: "Cat Chair",
        price: 250000,
        category: ["furniture", "cat"],
        image: "images/쇼파.jpg"
    },
    {
        id: 2,
        name: "Wooden Table",
        price: 500000,
        category: ["furniture"],
        image: "images/테이블.jpg"
    },
    {
        id: 3,
        name: "Step Shelf",
        price: 320000,
        category: ["new", "furniture"],
        image: "images/계단 책장.jpg"
    },
    {
        id: 4,
        name: "Cat Tunnel Bed",
        price: 280000,
        category: ["cat"],
        image: "images/고양이통로침대.jpg"
    },
    {
        id: 5,
        name: "Storage Cube",
        price: 260000,
        category: ["new"],
        image: "images/계단수납장.jpg"
    }
];

const grid = document.getElementById("catalogGrid");
const buttons = document.querySelectorAll(".filter-btn");

function renderProducts(category) {
    const selectedCategory = category || "all";
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter((product) => product.category.includes(selectedCategory));

    grid.innerHTML = filteredProducts.map((product, index) => `
        <article class="catalog-card">
            <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
            <a href="product.html" class="card-image-wrap">
                <img src="${product.image}" alt="${product.name}" />
            </a>
            <div class="card-info">
                <h3>${product.name}</h3>
                <p>₩ ${product.price.toLocaleString()}</p>
            </div>
        </article>
    `).join("");
}

const params = new URLSearchParams(window.location.search);
const currentCategory = params.get("category") || "all";

buttons.forEach((button) => {
    const isActive = button.dataset.category === currentCategory;
    button.classList.toggle("active", isActive);

    button.addEventListener("click", () => {
        const nextCategory = button.dataset.category;
        window.location.href = `all-product.html?category=${nextCategory}`;
    });
});

renderProducts(currentCategory);
