import {galleryItems} from './app.js';
import refs from './refs.js';
import openModal from './modal.js'
import {arrowNavigation} from './arrowNavigation.js';
const {gallaryList,modalImage,backdropImage,closeModalBtn,image}=refs;

export function closeModal() {
closeModalBtn.addEventListener('click', closeModalByClick);
window.addEventListener('keydown', closeClickEscape);
backdropImage.addEventListener('click', clickBackdrop);
window.addEventListener("keydown", arrowNavigation);
}

export function closeModalByClick(){
    modalImage.classList.remove('is-open');
image.src='';

}

export function closeClickEscape(e){
    console.log('Escape');
    if(e.code==="Escape"){
        closeModalByClick()
        refresh()
    }
};

export function clickBackdrop(e){
if(e.target===e.currentTarget){
    closeModalByClick()
    refresh()
}
}

export function refresh() {
    closeModalBtn.removeEventListener('click', closeModalByClick);
    window.removeEventListener('keydown', closeClickEscape);
    backdropImage.removeEventListener('click', clickBackdrop);
    window.removeEventListener("keydown", arrowNavigation);
  }