// The following line makes sure your styles are included in the project. Don't remove this.

import "../styles/main.scss";
import { recipeData } from "./data.js";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
const container = document.querySelector(".container");
let parseRecipe = JSON.parse(recipeData);
console.log(parseRecipe);

for (const el of Object.values(parseRecipe)) {
  console.log(el);
  createCard(el);
}
function createCard(item) {
  for (const el of item) {
    console.log(el);

    // Card Container
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.style.width = "18rem";
    cardContainer.style.marginRight = "2rem";

    // Image
    const img = document.createElement("img");
    img.classList.add("card-img-top", "img-fluid");
    img.src = el.image;
    img.style.height = "14rem";

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Heading
    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.textContent = el.title;

    // Person Name
    const personName = document.createElement("p");
    personName.classList.add("card-text", "border-bottom");
    personName.textContent = el.author;

    // Ingredients
    const ingredients = document.createElement("p");
    ingredients.classList.add("card-text");
    ingredients.textContent = el.ingredients;

    cardContainer.append(img, cardBody);
    cardBody.append(heading, personName, ingredients);

    container.querySelector(`#${el.type}`).append(cardContainer);
  }
}
