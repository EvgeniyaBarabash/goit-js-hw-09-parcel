
import {galleryItems} from './app.js';
import refs from './refs.js';
const {gallaryList,modalImage,backdropImage,closeModalBtn,image}=refs;
gallaryList.addEventListener('click', openModal);
import { closeModal } from './closeModal.js';

export default function openModal(e){
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
modalImage.classList.add('is-open')
image.src=e.target.dataset.source;
}
closeModal();
};