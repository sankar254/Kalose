$(document).ready(function(){
    //add class on header while scrolling
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $("nav").addClass("whiteHeader");
        } else {
            $("nav").removeClass("whiteHeader");
        }
    });

    //hamburger menu click
    $(".navbar-toggler").click(function(){
        $(".mob-menu").toggleClass("active");
    });

    //scroll bottom check
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
            $('.scroll-up').fadeIn();
        }
        else{
            $('.scroll-up').fadeOut();
        }
     });

     $(".scroll-up").click(function() {
        $("html, body").animate({ scrollTop: 0 });
        return false;
      });

});


  //product slider
  var swiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    freeMode: false,
    slidesOffsetAfter: 0,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: { 
        350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        }, 
        1920: {
          slidesPerView: 4,
          spaceBetween: 90,
        }, 
    },
});


//vitamin slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: true,
    slidesOffsetAfter: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: { 
        350: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: false,
          },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          freeMode: false,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
          freeMode: false,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 10,
          freeMode: true,
        },   
    },
  });




AOS.init({
    once: true,
    mirror: false,
  });