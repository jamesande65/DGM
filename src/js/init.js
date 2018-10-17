$(document).ready(function(){

    $('.big-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.small-carousel',
        arrows: false,
        fade: true,
        infinite: false,
    });
    $('.small-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
        asNavFor: '.big-carousel'
    });
    $('.main-menu__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
    });

    //handle video in carousel

    var video = document.querySelectorAll(".video video");

    if (video.length) {
        handleVideo();
    }

    function handleVideo() {
        var smallCarouselItem = $('.small-carousel .carousel-item');
        var bigCarouselItem = $('.big-carousel .carousel-item');

        for (var i = 0; i < smallCarouselItem.length; i++) {
            if (smallCarouselItem[i].classList.contains('video')) {
                smallCarouselItem[i].addEventListener('click', function (e) {
                    for (var j = 0; j < bigCarouselItem.length; j++) {
                        if (bigCarouselItem[j].children[0].nodeName === 'VIDEO') {
                            bigCarouselItem[j].children[0].pause();
                        }
                    }
                    var currentVideo = $('.big-carousel .video[data-slick-index="'+e.target.dataset.slickIndex+'"] video')[0];
                    if (currentVideo) {
                        currentVideo.play();
                    }
                });
            }
        }
    }

});