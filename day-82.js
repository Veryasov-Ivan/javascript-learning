// Day 82
// Product Inspector & Wishlist Manager

const productTable = document.getElementById("product-table");
const tableBody = document.getElementById("product-body");
const infoList = document.getElementById("infoList");
const favoritesList = document.getElementById("favoritesList");
const totalPrice = document.getElementById("totalPrice");

let total = 0;

const getProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=8");

        const data = await response.json();

        renderTable(data.products);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const renderTable = (products) => {
    tableBody.innerHTML = "";

    for (const product of products) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.innerText = product.id;
        tr.appendChild(tdId);

        const tdTitle = document.createElement("td");
        tdTitle.innerText = product.title;
        tr.appendChild(tdTitle);

        const tdCategory = document.createElement("td");
        tdCategory.innerText = product.category;
        tr.appendChild(tdCategory);

        const tdPrice = document.createElement("td");
        tdPrice.innerText = `$${product.price}`;
        tr.appendChild(tdPrice);

        const tdActions = document.createElement("td");

        const infoButton = document.createElement("button");

        infoButton.innerText = `🔍 Info`;

        infoButton.addEventListener("click", () => {
            infoList.innerHTML = "";

            const liBrand = document.createElement("li");
            liBrand.innerText = `Brand: ${product.brand}`;
            infoList.appendChild(liBrand);

            const liRating = document.createElement("li");
            liRating.innerText = `Rating: ${product.rating}`;
            infoList.appendChild(liRating);

            const liLeft = document.createElement("li");
            liLeft.innerText = `Left: ${product.stock}`;
            infoList.appendChild(liLeft);

            const liDescription = document.createElement("li");
            liDescription.innerText = product.description;
            infoList.appendChild(liDescription);
        });

        const favoriteButton = document.createElement("button");

        favoriteButton.innerText = `⭐️ Favorites`;

        favoriteButton.addEventListener("click", () => {
            const liFavorite = document.createElement("li");
            liFavorite.innerText = `${product.title} - $${product.price}`;

            total += product.price;

            totalPrice.innerText = `Total sum: $${total.toFixed(2)}`;

            const deleteButton = document.createElement("button");
            deleteButton.innerText = `❌`;

            deleteButton.addEventListener("click", () => {
                liFavorite.remove();

                total -= product.price;

                totalPrice.innerText = `Total sum: $${total.toFixed(2)}`;
            });

            liFavorite.appendChild(deleteButton);

            favoritesList.appendChild(liFavorite);
        });

        tdActions.appendChild(infoButton);
        tdActions.appendChild(favoriteButton);

        tr.appendChild(tdActions);

        tableBody.appendChild(tr);
    }
};

getProducts();
