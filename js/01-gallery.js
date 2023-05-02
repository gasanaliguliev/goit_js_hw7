import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImgList = document.querySelector('.gallery');
const cardsMarkup = createImages(galleryItems);
galleryImgList.insertAdjacentHTML('beforeend', cardsMarkup);
galleryImgList.addEventListener('click', onGalleryContainerClick);


function createImages(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery_item">
      <a class="gallery_link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  }).join('');
};


function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();  

  galleryImgList.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
  };