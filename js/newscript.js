$(document).ready(function () {
    $("#slider_p").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $("#slider_b").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $("#slider_foto").slick({
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed: 2000
    });
