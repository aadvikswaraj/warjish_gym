function closeNoticePopup() {
    document.querySelector('.notices-popup-cnt').classList.add('d-none');
}
document.querySelector('#notices-close-btn').addEventListener('click', closeNoticePopup);

function closeGalleryPopup() {
    document.querySelector('.gallery-popup-cnt').classList.add('d-none');
}
document.querySelector('#gallery-close-btn').addEventListener('click', closeGalleryPopup);


function openNoticePopup() {
    document.querySelector('.notices-popup-cnt').classList.remove('d-none');
}
document.querySelector('#notices-open-btn').addEventListener('click', openNoticePopup);

function openGalleryPopup() {
    document.querySelector('.gallery-popup-cnt').classList.remove('d-none');
}
document.querySelector('#gallery-open-btn').addEventListener('click', openGalleryPopup);

function toggleNavMenu() {
    document.querySelector('nav').classList.toggle('active');
}

document.querySelector('.hamburger-toggle-btn').addEventListener('click', toggleNavMenu);