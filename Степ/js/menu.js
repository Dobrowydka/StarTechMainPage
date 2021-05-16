$(document).ready(function() {
  $('.menu-burger__header').click(function(){
      $('.menu-burger__header').toggleClass('open-menu');
      $('.nav').toggleClass('open-menu');
  });
});







// First slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Second slider
var slideIndex = 1;
showSlides2(slideIndex);
function plusSlides2(n) {
showSlides2(slideIndex += n);
}
function currentSlide2(n) {
showSlides2(slideIndex = n);
}
function showSlides2(n) {
var i;
var slides = document.getElementsByClassName("mySlides2");
var dots = document.getElementsByClassName("dot2");
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

//Third slider
var slideIndex = 1;
showSlides3(slideIndex);
function plusSlides3(n) {
showSlides3(slideIndex += n);
}
function currentSlide3(n) {
showSlides3(slideIndex = n);
}
function showSlides3(n) {
var i;
var slides = document.getElementsByClassName("mySlides3");
var dots = document.getElementsByClassName("dot3");
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

//Fourth slider
var slideIndex = 1;
showSlides4(slideIndex);
function plusSlides4(n) {
showSlides4(slideIndex += n);
}
function currentSlide4(n) {
showSlides4(slideIndex = n);
}
function showSlides4(n) {
var i;
var slides = document.getElementsByClassName("mySlides4");
var dots = document.getElementsByClassName("dot4");
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
//fifthslider
var slideIndex = 1;
showSlides5(slideIndex);
function plusSlides5(n) {
showSlides5(slideIndex += n);
}
function currentSlide5(n) {
showSlides5(slideIndex = n);
}
function showSlides5(n) {
var i;
var slides = document.getElementsByClassName("mySlides5");
var dots = document.getElementsByClassName("dot5");
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
//sixthslider
var slideIndex = 1;
showSlides6(slideIndex);
function plusSlides6(n) {
showSlides6(slideIndex += n);
}
function currentSlide6(n) {
showSlides6(slideIndex = n);
}
function showSlides6(n) {
var i;
var slides = document.getElementsByClassName("mySlides6");
var dots = document.getElementsByClassName("dot6");
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

