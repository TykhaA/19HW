import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

const markUp = galleryItems.map(({ preview, original, description }) => {
return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
}).join('');
list.insertAdjacentHTML('afterbegin', markUp);

let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox',addTitle);

function addTitle() {
    gallery.options.captionsData = 'alt';
    gallery.options.captionDelay = '250';
}
