// Change navbar on scroll 
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
			$(".navbar-primary").addClass("nav-scroll");
	} else {
			$(".navbar-primary").removeClass("nav-scroll");
	}
});

$(".nav-icon").click(function () {
  $(this).toggleClass("active");
  $("body").toggleClass("nav-expand");
  $(".nav-content").toggleClass("show");
})

// Sliders
$('.client-reviews').slick();
$('.status-card-wrapper').slick({
	slidesToShow: 3,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
		}
	]
});


// CARD STACKS 
var $card = $('.stack-card');
var lastCard = $(".card-list .stack-card").length - 1;

$('.next-card').click(function(){ 
	var prependList = function() {
		if( $('.stack-card').hasClass('active') ) {
			var $slicedCard = $('.stack-card').slice(lastCard).removeClass('transformThis active');
			$('.card-list').prepend($slicedCard);
		}
	}
	$('.stack-card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('active');
	setTimeout(function(){prependList(); }, 150);
});

$('.prev-card').click(function() {
	var appendToList = function() {
		if( $('.stack-card').hasClass('active') ) {
			var $slicedCard = $('.stack-card').slice(0, 1).addClass('transformPrev');
			$('.card-list').append($slicedCard);
		}}
	
			$('.stack-card').removeClass('transformPrev').last().addClass('active').prevAll().removeClass('active');
	setTimeout(function(){appendToList();}, 150);
});
