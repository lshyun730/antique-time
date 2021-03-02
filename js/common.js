$(document).ready(function () {

    //common 
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {


        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return; // 스크롤값을 받아서 리턴한다.


        //스크롤트리거
        $('[class *= ani-start]').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window <= bottom_of_object) {
                if ($('[class *= ani-start]').hasClass('ani')) {
                    $(this).addClass('ani_stop');
                }
            }
        });



        //헤더 스크롤 
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            // downscroll code
            if ($('.ham').hasClass('active')) {

            } else {
                $('#header').css('opacity', '0')
                $('#header').removeClass('fixed');
            }

        } else {
            // upscroll code
            if (st < 80) {
                $('#header').removeClass('fixed');
            } else {
                $('#header').addClass('fixed');
                $('#header').css('opacity', '1')
            }
        }
        lastScrollTop = st;



        // 푸터픽스
        if (st > $('#wrap').offset().top * .5) {
            $('.footer').css('z-index', '9')
        } else {
            $('.footer').css('z-index', '-9999')
        }


    });


    //햄버거 메뉴 온오프
    $('.ham').click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.mNav .gnb').toggleClass('visible');
    });







    //메인페이지

    //메인화면 스크롤 클릭
    $('.scroll').click(function () {
        var scrollPosition = $('#wrap').offset().top;
        $('html,body').animate({
            scrollTop: scrollPosition
        }, 500);
    });



    //메인페이지 브랜드 슬라이더
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

    //메인페이지 서비스 슬라이더
    $('.service_list').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,

    });





    //서브페이지

    //about페이지 슬라이드
    $('.mixed_list').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        slidesToShow: 1,

    });

    $('.tab_content').hide();
    $('.tab_content:first').show();

    $('ul.snb li').click(function () {
        $('ul.snb li').removeClass('active').css('color', '#808080');
        $(this).addClass('active').css('color', '#000');
        $('.tab_content').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();

    });

});
