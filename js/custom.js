$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;  
  $("div.progress-bar").css("height", progress + "%");
});


var amountScrolled = 500;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.scroll-to-top').show();
  } else {
    $('.scroll-to-top').hide();
  }
});

if($('.faq-main-section').length){
$('.faq-question-area').click(function(e) {
  e.preventDefault();
  let $this = $(this);
  if ($this.next().hasClass('showAnswer')) {
      $this.next().removeClass('showAnswer');
      $this.parent().parent().find('.plus-minus-sign').removeClass('showMinus');
      $this.next().slideUp(350);
  } else {
      $this.parents().find('li .faq-list-cover .faq-answer-area').removeClass('showAnswer');
      $this.parents().find('li .faq-list-cover .plus-minus-sign').removeClass('showMinus');
      $this.parents().find('li .faq-list-cover .faq-answer-area').slideUp(350);
      $this.next().toggleClass('showAnswer');
      $this.parent().parent().find('.plus-minus-sign').toggleClass('showMinus');
      $this.next().slideToggle(350); 
  }
});

$('.plus-minus-sign').click(function(e) {
  e.preventDefault();
  let $this = $(this);
  if ($this.hasClass('showMinus')) {
      $this.removeClass('showMinus');
      $this.parent().find('.faq-answer-area').removeClass('showAnswer');
      $this.parent().find('.faq-answer-area').slideUp(350);
  } else {
      $this.parents().find('li .faq-list-cover .faq-answer-area').removeClass('showAnswer');
      $this.parents().find('li .faq-list-cover .plus-minus-sign').removeClass('showMinus');
      $this.parents().find('li .faq-list-cover .faq-answer-area').slideUp(350);
      $this.toggleClass('showMinus');
      $this.parent().find('.faq-answer-area').toggleClass('showAnswer');
      $this.parent().find('.faq-answer-area').slideToggle(350);
  }
});
}

$('.menuToggler').click(function(){
  $('#mainMenu, body, html').addClass('activeMenu');
  $('.blank-menu-div').addClass('activeMenu');
  $('body').removeClass('activeSubMenu');
})
$('body').on('click', 'ul > li.has-dropdown > span',function(){
  $('body').toggleClass('activeSubMenu');  
  $(this).parent().addClass('activeSubMenuUl');  
})
$('.blank-menu-div').click(function(){
  $('#mainMenu, body, html').removeClass('activeMenu');
  $(this).removeClass('activeMenu');
  $('body').removeClass('activeSubMenu');
  $('#mainMenu ul > li.has-dropdown').removeClass('activeSubMenuUl');
});
$('.menu-close-btn').click(function(){
  $('#mainMenu, body, html').removeClass('activeMenu');
  $('.blank-menu-div').removeClass('activeMenu'); 
  $('body').removeClass('activeSubMenu');
  $('#mainMenu ul > li.has-dropdown').removeClass('activeSubMenuUl');
});
$('ul>li.has-dropdown>ul').prepend("<button class='close-btn'>Back</button>");
$('ul>li.has-dropdown').prepend("<span></span>");

$('.navbar').delegate('.close-btn','click',function(){
  $('body').removeClass('activeSubMenu');
  $('#mainMenu li.has-dropdown').removeClass('activeSubMenuUl');
})

if($('.scroll-to-top').length){
  $('.scroll-to-top').click(function(){
    $('html,body').animate({scrollTop: 0},'slow');
  })
}

if($('.step-slider').length){
const slider = $(".step-slider");
slider
  .slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    vertical: true,
    verticalScrolling: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
});

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));
}

if($('.step-slider-02').length){
  const slider = $(".step-slider-02");
  slider
    .slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
  });
  
  slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
  }

if($('.testi-image-slider').length){
$('.testi-image-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.testiPrev'),
  nextArrow: $('.testiNext'),
  asNavFor: '.testi-text-slider'
});
}

if($('.testi-text-slider').length){
$('.testi-text-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  asNavFor: '.testi-image-slider',
  focusOnSelect: true, 
  pauseOnHover: false,
  arrows: true,
  prevArrow: $('.testiPrev'),
  nextArrow: $('.testiNext')
});
}

if($('.leadership-slider').length){
  $('.leadership-slider').slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: false,  
    prevArrow: $('.leaderPrev'),
    nextArrow: $('.leaderNext'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          infinite: true,
        }
      }
    ]
  });
  }
  
  if($('.writer-slider').length){
  $('.writer-slider').slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: false,  
    prevArrow: $('.writerPrev'),
    nextArrow: $('.writerNext'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          infinite: true,
        }
      }
    ]
  });
  }

if($('.home-banner-slider').length){
  $('.home-banner-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  });

const slickSlide = $('.video-slide');
for (let i = 1; i <= slickSlide.length; i++) {
  $('.landing_video_btn'+i).click(function(){
    var video1 = document.getElementById('videoSlide'+i);
    $(this).toggleClass('mutted');
    if(video1.muted === false){    
    video1.muted = true;
    }else{
    video1.muted = false;
    }
  })
}
  
  
  
  if( $('.slick-current').find('video.videoSlide').length !== 0) {
    $('.home-banner-slider').slick('slickPause');
    $(".home-banner-slider .slick-current video.videoSlide")[0].play();		  
  }else{
    $('.home-banner-slider').slick('slickPlay');
  }
  
  // On slide change, pause all videos
  $('.home-banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('video.videoSlide').each(function() {
    $(this).get(0).pause();
    });
  });
    
  // On slide chnage, play a video inside the current slide
  $('.home-banner-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if( $('.slick-current').find('video.videoSlide').length !== 0) {
    $('.home-banner-slider').slick('slickPause');
    $(".home-banner-slider .slick-current video.videoSlide")[0].play();       
    }else{
    $('.home-banner-slider').slick('slickPlay');
    }
  });
  
  $('.home-banner-slider video.videoSlide').on('ended', function() {
    $('.home-banner-slider').slick('slickPlay');
  });
  
}


//var myElement = document.querySelector(".service-new-section li");
// construct an instance of Headroom, passing the element
//var headroom  = new Headroom(myElement);
// initialise
//headroom.init();

/* $.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight() / 2;
	var viewportTop = $(window).scrollTop();
	var viewportHalf = viewportTop + $(window).height() / 2;
	return elementBottom > viewportTop && elementTop < viewportHalf;
};

$(window).on('load resize scroll', function() {
	$('.service-new-section li').each(function() {
		if ($(this).isInViewport()) {
			$(this).addClass("in-view");
		} else {
			$(this).removeClass("in-view");
		}
	});
}); */