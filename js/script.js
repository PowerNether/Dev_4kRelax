$(document).ready(function(){
    $('.main-slider').slick({
        infinite: false,
        autoplay: true,
        arrows: false,
        dots: true,
        dotsClass: 'main-slider-dots'
    });
    $('.video').slick({
        infinite: false,
        arrows: true,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
        centerMode: true,
        prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    rows: 2,
                    slidesPerRow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    rows: 1,
                    slidesPerRow: 1
                }
            }
        ]
    });

    $(function(){
        $('.header-burger').on('click', function(){
            $('.burger-menu').slideToggle(300, function(){
                if($(this).css('display') === 'none'){
                    $(this).removeAttr('style');
                }
            });
        });    
    });
    $('.LocationModal').on('click', function() {
        for(let i=0;i<=6;i++){
            $('.location-photo.gallery').append('<a href="#popup" class="popup-link"><img src="image/locPhoto1.png" alt="" class="photo"></a>');
        }
    });
    if ($(window).width() <= '768') {
        $('.location-photo').slick({
            infinite: false,
            arrows: false,
            rows: 3,
            slidesPerRow: 2,
            prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        rows: 3,
                        arrows: true,
                        slidesPerRow: 2,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 578,
                    settings: {
                        rows: 1,
                        arrows: false,
                        slidesPerRow: 1,
                        slidesToShow: 1.1
                    }
                }
            ]
        });
    }
        $('.popup-link').magnificPopup({
            type: 'inline',
            callbacks: {
                open() {
                  const $slider = $('#popup .slider');
                  const $slider__nav = $('#popup .slider_nav');
            
                  if (!$slider.hasClass('slick-initialized')) {
                    $slider.slick({
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: '#popup .slider_nav',
                      prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
                      nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
                    });
                    $slider__nav.slick({
                        infinite: true,
                        centerMode: true,
                        slidesToScroll: 1,
                        slidesToShow: 3,
                        focusOnSelect: true,
                        asNavFor: '#popup .slider',
                        arrows: false,
                        centerPadding: 10,
                    });
                  }
            
                  $slider.slick('slickGoTo', +$(this).attr('index'));
                  $slider__nav.slick('slickGoTo', +$(this).attr('index'));
                }
            }
        });
        $('.slide-image').magnificPopup({
            type: 'inline',
            callbacks: {
                open() {
                    const $slider = $('#popup2 .slider');
                    const $slider__nav = $('#popup2 .slider_nav');

                    if (!$slider.hasClass('slick-initialized')) {
                        $slider.slick({
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            asNavFor: '#popup2 .slider_nav',
                            prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
                            nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
                        });
                        $slider__nav.slick({
                            infinite: true,
                            centerMode: true,
                            slidesToScroll: 1,
                            slidesToShow: 3,
                            focusOnSelect: true,
                            asNavFor: '#popup2 .slider',
                            arrows: false,
                            centerPadding: 10,
                        });
                    }

                    $slider.slick('slickGoTo', +$(this).attr('index'));
                    $slider__nav.slick('slickGoTo', +$(this).attr('index'));
                }
            }
        });

    $('.LocationModal').on('click', function() {
        for(let i=0;i<=6;i++){
            $('.location-photo.gallery').append('<a href="#popup" class="popup-link"><img src="image/locPhoto1.png" alt="" class="photo"></a>');
        }
    });
    $('.form-subs .sub').on('click', function() {
        $('.form-subs .sub').css('border', 'solid 2px #cecece').find('input').prop('checked', false);
        $(this).css('border', 'solid 2px #ccd500').find('input').prop('checked', true);

        var speed = 1000;
        var top = $('.form-payment').offset().top;
        $('html, body').animate({scrollTop: top}, speed);
    });
    // $('.__one').on('click', function() {
    //     $('.__one').css('border', 'solid 2px #ccd500').prop('checked', true);
    //     $('.__two').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__three').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__four').css('border', 'solid 2px #cecece').prop('checked', false);
    // });
    // $('.__two').on('click', function() {
    //     $('.__one').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__two').css('border', 'solid 2px #ccd500').prop('checked', true);
    //     $('.__three').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__four').css('border', 'solid 2px #cecece').prop('checked', false);
    // });
    // $('.__three').on('click', function() {
    //     $('.__one').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__two').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__three').css('border', 'solid 2px #ccd500').prop('checked', true);
    //     $('.__four').css('border', 'solid 2px #cecece').prop('checked', false);
    // });
    // $('.__four').on('click', function() {
    //     $('.__one').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__two').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__three').css('border', 'solid 2px #cecece').prop('checked', false);
    //     $('.__four').css('border', 'solid 2px #ccd500').prop('checked', true);
    // });
  });
