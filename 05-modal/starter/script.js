'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');


const openModal = function () {
    // remove hidden class in modal
        modalEl.classList.remove('hidden');

    // remove the hidden keyword classname in overlay
        overlayEl.classList.remove('hidden');
};


const closeModal = function () {
    // add hidden class in modal
    modalEl.classList.add('hidden');

    // add the hidden keyword classname in overlay
    overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);