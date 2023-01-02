function updateProductsSanduiches(productsData) {
    const menuLeft = document.getElementById("menu_left");
    const menuRight = document.getElementById("menu_right");

    menuLeft.innerHTML = productsData.products.sanduiches.map(sanduiche => {
        // return `
        //     <section class="item">
        //         <div class="titulo_descricao">
        //             <h2 class="title">${sanduiche.name}</h2>
        //             <p class="descricao">${sanduiche.ingredients}</p>
        //         </div>
        //         <div class="preco">
        //             <p>${sanduiche.price}</p>
        //         </div>
        //     </section>
        // `;

        console.log(sanduiche);
    }).join("");

}


(async () => {
    const productsData = await fetchProductsData();
    updateProductsSanduiches(productsData);
})()