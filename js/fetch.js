document.getElementById("showFavourites").addEventListener
('click', showFavourites);



document.getElementById("showRisotto").addEventListener
('click', showRisotto);

function showFavourites(){
    fetch("data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(recipes){
                output += `
            <ul>
              <li>Namn: ${recipes.recipeName}</li>
              <li>Tid: ${recipes.recipeTime}</li>
              <li>Ingredienser: ${recipes.recipeIngredients}</li>
            </ul> 
          `;

            });
            document.getElementById('output').innerHTML = output;
        })
}



function showRisotto(){
    fetch("data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.map(function(recipes){
                let risotto = recipes.recipeIngredients[0];
                console.log(risotto);
                output += `
            <ul>
              <li>Ingredienser: ${recipes.recipeIngredients}</li>
            </ul> 
          `;

            });
            document.getElementById('output').innerHTML = output;
        })

}




