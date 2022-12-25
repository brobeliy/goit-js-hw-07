import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Разметка
const imgGal = document.querySelector(".gallery");
const item = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href=""${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

imgGal.insertAdjacentHTML("beforeend", item);
//Разметка

//2.Делегирование
imgGal.addEventListener("click", onClick);
function onClick(e) {
  e.preventDefault();
  if (e.target.className === "gallery") {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal"> <img src="${e.target.dataset.source}"></div>
`);
  instance.show();

  window.addEventListener("keydown", closeModal);
  function closeModal(e) {
    if (e.code == "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeModal);
    }
   
  }
}

// console.log(galleryItems);
