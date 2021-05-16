/*Слайдер2*/
$('.krug1').toggleClass('krug_active', true);
$('.MySlides2').css('display', 'block');
$('.MySlides22').css('display', 'none');
$('.krug1').on('click', function(){
  $(this).toggleClass('krug_active', true);
  $('.krug2').toggleClass('krug_active', false);
  $('.MySlides2').css('display', 'block');
  $('.MySlides22').css('display', 'none');
});
$('.krug2').on('click', function(){
  $(this).toggleClass('krug_active', true);
  $('.krug1').toggleClass('krug_active', false);
  $('.MySlides22').css('display', 'block');
  $('.MySlides2').css('display', 'none');
});
$('.krug3').toggleClass('krug_active', true);
$('.MySlides3').css('display', 'block');
$('.MySlides33').css('display', 'none');
  $('.slider3_3').css('display', 'none');
$('.krug3').on('click', function(){
  $(this).toggleClass('krug_active', true);
  $('.krug4').toggleClass('krug_active', false);
  $('.MySlides3').css('display', 'block');
  $('.MySlides33').css('display', 'none');
  $('.white_block3').css('display', 'block');
  $('.white_block3_3').css('display', 'none');
  $('.krugi_33').toggleClass('krugi_33_active', false
);
  $('.slider3').css('display', 'block');
  $('.slider3_3').css('display', 'none');
});
$('.krug4').on('click', function(){
  $(this).toggleClass('krug_active', true);
  $('.krug3').toggleClass('krug_active', false);
  $('.MySlides33').css('display', 'block');
  $('.MySlides3').css('display', 'none');
  $('.white_block3').css('display', 'none');
  $('.white_block3_3').css('display', 'block');
  $('.krugi_33').toggleClass('krugi_33_active', true);
  $('.slider3_3').css('display', 'block');
  $('.slider3').css('display', 'none');
});


/*меню*/
$(document).ready(function() {
$('.menu-burger__header').click(function(){
$('.menu-burger__header').toggleClass('open-menu');
$('.nav').toggleClass('open-menu');
});
});
/*слайдер1*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



$(document).mouseup(function (e) {
      var popup = $('#openModal');
      if (e.target != popup[0] && popup.has(e.target).length === 0) {
          $('#openModal').fadeOut();
  //		$('.portfolio-section, .prev_section').css('filter','blur(0px)');
      }
  });
