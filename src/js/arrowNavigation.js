
import {galleryItems} from './app.js';
import refs from './refs.js';
import { closeModal } from './closeModal.js';
const {gallaryList,modalImage,backdropImage,closeModalBtn,image}=refs;

let indexOfOriginalLink = 0;
const originalLinks = galleryItems.map((elem) => {
  return elem.original;
});

export function moveToLeft (e){
    if (e.code === 'ArrowLeft') {
      indexOfOriginalLink > 0
        ? (image.src = originalLinks[(indexOfOriginalLink -= 1)])
        : (image.src =
            originalLinks[(indexOfOriginalLink = originalLinks.length - 1)]);
    }
  };
  
  export function moveToRight (e) {
    if (e.code === 'ArrowRight') {
      indexOfOriginalLink < originalLinks.length - 1
        ? (image.src = originalLinks[(indexOfOriginalLink += 1)])
        : (image.src = originalLinks[(indexOfOriginalLink = 0)]);
    }
  };
  
  export function arrowNavigation (e) {
    if (!modalImage.classList.contains('is-open')) {
      return;
    }
    moveToLeft(e);
    moveToRight(e);
  };