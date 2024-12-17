$(document).ready(function () {

    // Slick Slider jq
    $('.autoplay').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        
    });


    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Aos Js
    AOS.init({
        offset: 120,
        duration: 1000,
    });



});


// Header menu hover to show 
$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});