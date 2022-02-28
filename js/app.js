const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayCocktail(data.drinks));
}

const displayCocktail = drinks => {
    const cocktailContainer = document.getElementById('cocktail-container');
    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.classList.add('drink');
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="drink-image">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <button onclick="loadDetails(${drink.idDrink})" class="btn btn-dark px-3 py-1 mt-2">Details</button>
                </div>
            </div>
        `;
        cocktailContainer.appendChild(div);
    })
}

const loadDetails = drinkId => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(res => res.json())
        .then(data => displayDetails(data.drinks[0]));
}

const displayDetails = drink => {
    console.log(drink);
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
        <div class="w-50 mx-auto">
            <img src="${drink.strDrinkThumb}" class="img-fluid" alt="drink-image">
            <div>
                <h3 class="my-3">${drink.strDrink}</h3>
                <h5 class="my-3">Category: ${drink.strCategory}</h5>
                <p class="my-3 text-muted">Instructions: ${drink.strInstructions}</p>
            </div>
        </div>
    `;

}