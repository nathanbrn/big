async function fetchCategoriesData() {
    const url = "https://raw.githubusercontent.com/nathanbrn/big/main/data/categories.json";
    const fetching = await fetch(url);
    return await fetching.json();
}