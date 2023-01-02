async function fetchProductsData() {
    const url = "https://raw.githubusercontent.com/nathanbrn/big/main/data/products.json";
    const fetching = await fetch(url);
    return await fetching.json();
}