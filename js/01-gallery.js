import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

const markUp = galleryItems.map(({ preview, original, description }) => {
return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');
list.insertAdjacentHTML('afterbegin', markUp);

list.addEventListener('click', handlerOpen)

function handlerOpen(evt) {
    evt.preventDefault();
    const link = evt.target.dataset.source;
    showPopUp(link)
}
function showPopUp(preview){
    const instance = basicLightbox.create(`
        <img
        src="${preview}"
        />
    `,{
        handler: null,
        onShow (instance){ 
            this.handler = onEscape.bind(instance)
            document.addEventListener('keydown', this.handler)
        },
        onClose(instance) {
            document.removeEventListener('keydown', this.handler)
        }
    })
    instance.show()
}
function onEscape({code}) {
    if (code === 'Escape') {
        this.close()
    }
}
