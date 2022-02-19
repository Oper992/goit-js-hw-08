// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";;
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector(".gallery");

function renderingGallery(array) {
  const gallery = array
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}">
        <img  class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>`
    )
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", gallery);
}

renderingGallery(galleryItems);

let simplLightboxGallery = new SimpleLightbox(".gallery a", {captions: true,
  captionsData: 'alt',
  captionDelay: 250,});

console.log(galleryItems);
