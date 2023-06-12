const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const productList = ingredients.map(ingredient => {  
    const productItem = document.createElement('li');
    productItem.classList.add('item');
    productItem.textContent = ingredient;
    return productItem;
  });
  listIngredients.append(...productList);
