 
const ulCategories = document.querySelector('#categories');

const liItem = ulCategories.children;
const numLiItem = liItem.length;
console.log(`Number of categories: ${numLiItem}`);


const category = [...liItem].forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`)  
});
