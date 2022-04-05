$(document).ready(function () {

    //scroll animation event
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        if (Math.abs(lastScrollTop - st) <= delta)
        return;
        $('[class *= ani-start]').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
        });
        
        var st = $(this).scrollTop();
        //header scroll animation
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            // downscroll
            if ($('.ham').hasClass('active')) {
            } else {
                $('#header').css('transform', 'translate(-50%, -100px)')
                $('#header').removeClass('fixed');
            }

        } else {
            // upscroll
            if (st < 80) {
                $('#header').removeClass('fixed');
            } else {
                $('#header').addClass('fixed');
                $('#header').css('transform', 'translate(-50%, 0)')
            }
        }
        lastScrollTop = st;

        // footer fix
        if (st > $('#wrap').offset().top * .5) {
            $('.footer').css('z-index', '9')
        } else {
            $('.footer').css('z-index', '-9999')
        }


    });


    //mobile menu on/off
    $('.ham').click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.mNav .gnb').toggleClass('visible');
    });




//mainpage

    //main visual scroll button event
    $('.scroll').click(function () {
        var scrollPosition = $('#wrap').offset().top;
        $('html,body').animate({
            scrollTop: scrollPosition
        }, 500);
    });

    //service slider
    $('.service_list').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
    });

    //brand slider
    $('.brand_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.brand_nav'
    });
    $('.brand_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.brand_list',
        centerMode: true,
        focusOnSelect: true
    });





//subpages

    //about page mixed slider
    $('.mixed_list').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        slidesToShow: 1,
    });

    //about page tab menu 
    $('.tab_content').hide();
    $('.tab_content:first').show();

    $('ul.snb li').click(function () {
        $('.tab_content [class *= ani-start]').addClass('ani_stop');
        $('ul.snb li').removeClass('active').css('color', '#808080');
        $(this).addClass('active').css('color', '#000');
        $('.tab_content').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
    });

});
