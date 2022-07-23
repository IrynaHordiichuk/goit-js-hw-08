
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map( item =>
     `<li class="list__item"><a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`).join(' ');

galleryDivRef.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});

