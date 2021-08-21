import {galleryItems} from './app.js';
import refs from './refs.js';
const {gallaryList,modalImage,backdropImage,closeModalBtn,image}=refs;
console.log(galleryItems);


function createListGallery(galleryItems){
return galleryItems.map(({original,preview,description})=>{
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`
}).join('');
};
const gallaryListImages = createListGallery(galleryItems);
gallaryList.insertAdjacentHTML('beforeend',gallaryListImages);
console.log(gallaryList);

