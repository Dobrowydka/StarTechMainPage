/*меню*/
$(document).ready(function() {
$('.menu-burger__header').click(function(){
$('.menu-burger__header').toggleClass('open-menu');
$('.nav').toggleClass('open-menu');
});
});

$(document).ready(function(){
      $('.slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
    });
