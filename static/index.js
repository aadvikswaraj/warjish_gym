function closeNoticePopup() {
    document.querySelector('.notices-popup-cnt').classList.add('d-none');
    document.body.style.overflow = "auto";
};
document.querySelector('#notices-close-btn').addEventListener('click', closeNoticePopup);

function closeGalleryPopup() {
    document.querySelector('.gallery-popup-cnt').classList.add('d-none');
    document.body.style.overflow = "auto";
};
document.querySelector('#gallery-close-btn').addEventListener('click', closeGalleryPopup);


function openNoticePopup() {
    document.querySelector('.notices-popup-cnt').classList.remove('d-none');
    document.body.style.overflow = "hidden";
};
document.querySelector('#notices-open-btn').addEventListener('click', openNoticePopup);

function openGalleryPopup() {
    document.querySelector('.gallery-popup-cnt').classList.remove('d-none');
    document.body.style.overflow = "hidden";
};
document.querySelector('#gallery-open-btn').addEventListener('click', openGalleryPopup);

function toggleNavMenu() {
    document.querySelector('nav').classList.toggle('active');
};

document.querySelector('.hamburger-toggle-btn').addEventListener('click', toggleNavMenu);


function appendNoticeOnDOM(content, date) {
    document.querySelector('.notices').innerHTML += `<div class="notice">
    <p class="content">${content}</p>
    <span class="timestamp">${date}</span>
    </div>`;
    
};

var notice_pages_count = 0;
async function loadNextPageNotice() {
    if (notice_pages !== 0) {
        document.querySelector('#notices-loader-cnt').classList.remove('d-none');
        document.querySelector('#notices-load-more-cnt').classList.add('d-none');
        notice_pages_count++;
        let notices = await (await fetch(`http://127.0.0.1:8000/apis/notices/?page=${notice_pages_count}`)).json();
        document.querySelector('#notices-loader-cnt').classList.add('d-none');
        document.querySelector('#notices-load-more-cnt').classList.remove('d-none');
        notices.data.forEach(notice => {
            appendNoticeOnDOM(notice.content, notice.date);
        });
        if (notice_pages_count === notice_pages) {
            document.querySelector('#notices-load-more-cnt').classList.add('d-none');
        };
    }
    else{
        document.querySelector('.notices').innerHTML = `<h3 style="text-align: center; margin-top: 10px;">No Notices</h3>`;
        document.querySelector('#notices-loader-cnt').classList.add('d-none');
    };
};
loadNextPageNotice();
document.querySelector('#notices-load-more-cnt button').addEventListener('click', loadNextPageNotice);





function appendPhotoOnDOM(url) {
    console.log(document.querySelector('.photos'));
    document.querySelector('.gallery-popup .photos').innerHTML += `
    <div class="photo">
        <img src="${url}" alt="">
    </div>`;
};

var gallery_pages_count = 0;
async function loadNextPageGallery() {
    if (gallery_pages  !== 0) {
        document.querySelector('#photos-loader-cnt').classList.remove('d-none');
        document.querySelector('#photos-load-more-cnt').classList.add('d-none');
        gallery_pages_count++;
        let photos = await (await fetch(`http://127.0.0.1:8000/apis/gallery/?page=${notice_pages_count}`)).json();
        document.querySelector('#photos-loader-cnt').classList.add('d-none');
        document.querySelector('#photos-load-more-cnt').classList.remove('d-none');
        photos.data.forEach(photo => {
            console.log(photo.image);
            appendPhotoOnDOM(photo.image);
        });
        if (gallery_pages_count === gallery_pages ) {
            document.querySelector('#photos-load-more-cnt').classList.add('d-none');
        };
    }
    else{
        document.querySelector('.photos').innerHTML = `<h3 style="text-align: center; margin-top: 10px;">No Photos</h3>`;
        document.querySelector('#photos-loader-cnt').classList.add('d-none');
    };
};
loadNextPageGallery();
document.querySelector('#photos-load-more-cnt button').addEventListener('click', loadNextPageGallery);