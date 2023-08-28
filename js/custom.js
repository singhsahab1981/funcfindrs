var amountScrolled = 500;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.scroll-to-top').show();
  } else {
    $('.scroll-to-top').hide();
  }
});

$('.menuToggler').click(function(){
  $('#mainMenu, body, html').addClass('activeMenu');
  $('.blank-menu-div').addClass('activeMenu');
})
$('.blank-menu-div').click(function(){
  $('#mainMenu, body, html').removeClass('activeMenu');
  $(this).removeClass('activeMenu');
});
$('.menu-close-btn').click(function(){
  $('#mainMenu, body, html').removeClass('activeMenu');
  $('.blank-menu-div').removeClass('activeMenu');
});

if($('.scroll-to-top').length){
  $('.scroll-to-top').click(function(){
    $('html,body').animate({scrollTop: $('#header').offset().top},'slow');
  })
}

if($('.testi-image-slider').length){
$('.testi-image-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.testi-text-slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        prevArrow: $('.testiPrev'),
        nextArrow: $('.testiNext'),
      }
    }
  ]
});
}

if($('.testi-text-slider').length){
$('.testi-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testi-image-slider',
  focusOnSelect: true, 
  prevArrow: $('.testiPrev'),
  nextArrow: $('.testiNext'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});
}

if($('.leadership-slider').length){
$('.leadership-slider').slick({
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,  
  prevArrow: $('.leaderPrev'),
  nextArrow: $('.leaderNext'),
});
}

if($('.writer-slider').length){
$('.writer-slider').slick({
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,  
  prevArrow: $('.writerPrev'),
  nextArrow: $('.writerNext'),
});
}

if($('#appointment-form').length){
  $("#appointment-form").validate({
    rules: {
        yname: "required",
        bname: "required",
        email: {
            required: true,
            email: true
        },
        phone: "required",
        businessinfo: "required"
    },
    messages: {
        yname: "Please enter your full name",
        bname: "Please enter your business name",
        email: "Please enter your valid email address",
        phone: "Please enter your mobile",
        businessinfo: "Please let us know about you and your business"
    },
    onfocusout: function(element) {
      return $(element).valid();
    },
    submitHandler: function(form) {
                    
      }
  });
}

if($('#newsletterForm').length){
  $("#newsletterForm").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        email: "Please enter your valid email address",
    },
    onfocusout: function(element) {
      return $(element).valid();
    },
    submitHandler: function(form) {
                    
      }
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