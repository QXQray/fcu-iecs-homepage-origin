var swiperElement = document.querySelector('.mySwiper');
var swiper = null;

if (swiperElement) {
    swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 1,
        watchSlidesProgress: true,
        autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

document.querySelectorAll('.index-video').forEach(element => {
    element.addEventListener('click', () => {
        if (swiper && swiper.autoplay) {
            swiper.autoplay.stop();
        }
        let url = element.dataset.url;
        url = url.split('v=')[1];
        var modalContent = document.querySelector('#modalForVideo .modal-content');

        if (modalContent) {
            modalContent.innerHTML = `<iframe src="https://www.youtube.com/embed/${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        }
    });
});

var modalForVideo = document.querySelector('#modalForVideo');

if (modalForVideo) {
    modalForVideo.addEventListener('hide.bs.modal', () => {
        var modalContent = document.querySelector('#modalForVideo .modal-content');

        if (modalContent) {
            modalContent.innerHTML = '';
        }

        if (swiper && swiper.autoplay) {
            swiper.autoplay.start();
        }
    });
}

window.addEventListener('load', () => {
    let index_about = document.querySelector('.index-about-background');
    if (!index_about || !index_about.dataset || !index_about.dataset.bgimg) {
        return;
    }

    let bgimg = index_about.dataset.bgimg;
    document.getElementsByClassName('index-about-background')[0].style.backgroundImage = `url(${location.origin + bgimg})`;
});
