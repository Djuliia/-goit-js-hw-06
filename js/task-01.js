const listEl = document.querySelector('#categories');

const numCategories = listEl.children.length;
console.log(`Number of categories: ${numCategories}`);

const categories = document.querySelectorAll('#categories .item');

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const numElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName} \nElements: ${numElements}`)
});
    
    

