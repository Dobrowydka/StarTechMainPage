$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
    });
});

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
for (i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

// Модальное окно 3 блок
$('.js-button-campaign3').click(function () {
      $('.js-overlay-campaign3').fadeIn();
      $('.js-overlay-campaign3').addClass('disabled');
  });
  $('.js-close-campaign3').click(function () {
      $('.js-overlay-campaign3').fadeOut();
  });
  
  $(document).mouseup(function (e) {
      var popup = $('.js-popup-campaign3');
      if (e.target != popup[0] && popup.has(e.target).length === 0) {
          $('.js-overlay-campaign3').fadeOut();
      }
  });

// Модальное окно 4.1 блок
$('.js-button-campaign41').click(function () {
    $('.js-overlay-campaign41').fadeIn();
    $('.js-overlay-campaign41').addClass('disabled');
});
$('.js-close-campaign41').click(function () {
    $('.js-overlay-campaign41').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign41');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign41').fadeOut();
    }
});

// Модальное окно 4.2 блок
$('.js-button-campaign42').click(function () {
    $('.js-overlay-campaign42').fadeIn();
    $('.js-overlay-campaign42').addClass('disabled');
});
$('.js-close-campaign42').click(function () {
    $('.js-overlay-campaign42').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign42');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign42').fadeOut();
    }
});

  // Модальное окно 5 блок
$('.js-button-campaign5').click(function () {
  $('.js-overlay-campaign5').fadeIn();
  $('.js-overlay-campaign5').addClass('disabled');
});
$('.js-close-campaign5').click(function () {
  $('.js-overlay-campaign5').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign5');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-campaign5').fadeOut();
  }
});

// Модальное окно 6.1 блок
$('.js-button-campaign61').click(function () {
    $('.js-overlay-campaign61').fadeIn();
    $('.js-overlay-campaign61').addClass('disabled');
});
$('.js-close-campaign61').click(function () {
    $('.js-overlay-campaign61').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign61');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign61').fadeOut();
    }
});

// Модальное окно 6.2 блок
$('.js-button-campaign62').click(function () {
    $('.js-overlay-campaign62').fadeIn();
    $('.js-overlay-campaign62').addClass('disabled');
});
$('.js-close-campaign62').click(function () {
    $('.js-overlay-campaign62').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign62');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign62').fadeOut();
    }
});

  // Модальное окно 7 блок
$('.js-button-campaign7').click(function () {
  $('.js-overlay-campaign7').fadeIn();
  $('.js-overlay-campaign7').addClass('disabled');
});
$('.js-close-campaign7').click(function () {
  $('.js-overlay-campaign7').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign7');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-campaign7').fadeOut();
  }
});

// Модальное окно 8.1 блок
$('.js-button-campaign81').click(function () {
    $('.js-overlay-campaign81').fadeIn();
    $('.js-overlay-campaign81').addClass('disabled');
});
$('.js-close-campaign81').click(function () {
    $('.js-overlay-campaign81').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign81');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign81').fadeOut();
    }
});

// Модальное окно 8.2 блок
$('.js-button-campaign82').click(function () {
    $('.js-overlay-campaign82').fadeIn();
    $('.js-overlay-campaign82').addClass('disabled');
});
$('.js-close-campaign82').click(function () {
    $('.js-overlay-campaign82').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign82');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign82').fadeOut();
    }
});

  // Модальное окно 9 блок
  $('.js-button-campaign9').click(function () {
    $('.js-overlay-campaign9').fadeIn();
    $('.js-l-campaign9').addClass('disabled');
  });
  $('.js-close-campaign9').click(function () {
    $('.js-overlay-campaign9').fadeOut();
  });
  
  $(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign9');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign9').fadeOut();
    }
  });

    // Модальное окно 10 блок
    $('.js-button-campaign10').click(function () {
        $('.js-overlay-campaign10').fadeIn();
        $('.js-overlay-campaign10').addClass('disabled');
      });
      $('.js-close-campaign10').click(function () {
        $('.js-overlay-campaign10').fadeOut();
      });
      
      $(document).mouseup(function (e) {
        var popup = $('.js-popup-campaign10');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay-campaign10').fadeOut();
        }
      });

  // Модальное окно 11 блок
  $('.js-button-campaign11').click(function () {
    $('.js-overlay-campaign11').fadeIn();
    $('.js-overlay-campaign11').addClass('disabled');
  });
  $('.js-close-campaign11').click(function () {
    $('.js-overlay-campaign11').fadeOut();
  });
  
  $(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign11');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign11').fadeOut();
    }
  });
  
  // Модальное окно 12.1 блок
$('.js-button-campaign121').click(function () {
    $('.js-overlay-campaign121').fadeIn();
    $('.js-overlay-campaign121').addClass('disabled');
});
$('.js-close-campaign121').click(function () {
    $('.js-overlay-campaign121').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign121');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign121').fadeOut();
    }
});

// Модальное окно 8.2 блок
$('.js-button-campaign122').click(function () {
    $('.js-overlay-campaign122').fadeIn();
    $('.js-overlay-campaign122').addClass('disabled');
});
$('.js-close-campaign122').click(function () {
    $('.js-overlay-campaign122').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign122');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign122').fadeOut();
    }
});

    // Модальное окно 13 блок
    $('.js-button-campaign13').click(function () {
      $('.js-overlay-campaign13').fadeIn();
      $('.js-overlay-campaign13').addClass('disabled');
    });
    $('.js-close-campaign13').click(function () {
      $('.js-overlay-campaign13').fadeOut();
    });
    
    $(document).mouseup(function (e) {
      var popup = $('.js-popup-campaign13');
      if (e.target != popup[0] && popup.has(e.target).length === 0) {
          $('.js-overlay-campaign13').fadeOut();
      }
    });

        // Модальное окно 14 блок
        $('.js-button-campaign14').click(function () {
          $('.js-overlay-campaign14').fadeIn();
          $('.js-overlay-campaign14').addClass('disabled');
        });
        $('.js-close-campaign14').click(function () {
          $('.js-overlay-campaign14').fadeOut();
        });
        
        $(document).mouseup(function (e) {
          var popup = $('.js-popup-campaign14');
          if (e.target != popup[0] && popup.has(e.target).length === 0) {
              $('.js-overlay-campaign14').fadeOut();
          }
        });