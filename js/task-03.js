const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector('.gallery');

// const imgElements = images.map(img => {
//   const imgEl = document.createElement('img');
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   const itemGallery = document.createElement('li');
//   itemGallery.appendChild(imgEl);
//   listGallery.appendChild(itemGallery);
//   return imgEl;
// })

// console.log(listGallery);


const markup = images.map(image =>`<li><img src=${image.url} alt = '${image.alt}'></img></li>`).join('');
listGallery.insertAdjacentHTML("beforeend", markup);
