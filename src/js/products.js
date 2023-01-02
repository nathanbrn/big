fetch("../../data/products.json")
    .then(res => {
        return res.json();
    })
    .then(jsonBody => {
        return jsonBody.products;
    })
    .then(products => {
        return products[0].salgados;
    })
    .then(salgados => {
        return salgados[0].pasteis;
    })
    .then(listPastel => {
        return listPastel.map((pastel) => {
            return pastel;
        })
    })
    .then(pastel => {
        const menu = document.getElementById("menu");
        const nomesPasteis = pastel.map(nomes => nomes.name);
        const precosPasteis = pastel.map(nomes => nomes.price);

        for(let i = 0; i < nomesPasteis.length; i++) {
            console.log(nomesPasteis[i]+" - "+precosPasteis[i]);
            menu.innerHTML = `
                <div class="container_item">
                    <section class="item">
                        <div class="titulo_descricao">
                            <h2 class="title">${nomesPasteis[i]}</h2>
                            <p class="descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </div>
                        <div class="preco">
                            <p>${precosPasteis[i]}</p>
                        </div>
                    </section>
                </div>
            `;
        }
    })
    .catch((error) => {
        console.log(error);
    });