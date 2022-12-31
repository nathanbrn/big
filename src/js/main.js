function updateCategories(categoriesData) {
    const categories = document.getElementById("categories");
    categories.innerHTML = categoriesData.categories.map(category => {
        return `
            <button class="items" id="salgados">${category}</button>
        `;
    }).join("");
}

(async () => {
    const categoriesData = await fetchCategoriesData();
    updateCategories(categoriesData);
})()