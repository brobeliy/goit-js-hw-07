import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgGal = document.querySelector(".gallery");
const item = galleryItems
  .map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

imgGal.insertAdjacentHTML("beforeend", item);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
