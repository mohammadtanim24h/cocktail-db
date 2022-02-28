const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayCocktail(data.drinks));
}

const displayCocktail = drinks => {
    console.log(drinks);
}