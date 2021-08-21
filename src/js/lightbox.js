import {galleryItems} from './app.js';
import refs from './refs.js';
const {gallaryList,modalImage,backdropImage,closeModalBtn,image}=refs;
console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import cardList from "../tamplates/card.hbs";
console.log(cardList(galleryItems[1]));

console.log(cardList(galleryItems));
function createListGallery(galleryItems){
    // return galleryItems.map(cardList).join('');
    return cardList(galleryItems)
    };
    const gallaryListImages = createListGallery(galleryItems);
    gallaryList.insertAdjacentHTML('beforeend',gallaryListImages);
    console.log(gallaryList);
  
let gallery = new SimpleLightbox('.gallery__item');
gallery.on('show.simplelightbox', function () {
	// do something…
});