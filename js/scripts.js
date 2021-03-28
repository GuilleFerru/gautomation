

$(document).scroll(function () {
	$('.fixedContainer,.header__nav--scroll,.header__logo--scroll').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$('.navbar-collapse li').click(function(){
	$(".navbar-collapse").collapse('hide');
});


