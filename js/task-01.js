import gallerylist from './gallery-items.js'

const refs = {
  gallery: document.querySelector('ul.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]')
};
function addGallery(gallerylist) {
     gallerylist.forEach(el => {
        const murkup = `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></li>`;  
    refs.gallery.insertAdjacentHTML('beforeend', murkup);    
   });
}
addGallery(gallerylist);

function openModal(e) {    
  e.preventDefault(); 
  if (e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.dataset.source;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
  }
    window.addEventListener('keyup',closeModal)
    document.querySelector('.lightbox__overlay').addEventListener('click', closeModal);
    refs.btn.addEventListener('click', closeModal);    
 };
function closeModal({ target, code = "" }) {
  if(target.nodeName === 'BUTTON'||code === "Escape"||target=== document.querySelector('.lightbox__overlay')) {
    refs.lightbox.classList.remove('is-open');    
    refs.lightbox.querySelector('.lightbox__image').src = '';
    refs.lightbox.querySelector('.lightbox__image').alt = '';
    }
};
refs.gallery.addEventListener('click', openModal);

