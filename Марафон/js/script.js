$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		speed:800,
		centerMode:true,
		variableWidth:true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows:true,
					dots:true,
					slidesToShow:1,
					speed:800,
				}
			}
			]
	});
});


