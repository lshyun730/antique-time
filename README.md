# Antique Time

Click [demo](https://lshyun730.github.io/antique-time/index.html)
Click [design](https://lshyun730.github.io/lsh/portfolio-web-antiquetime.html)
<br><br><br>

### ✔ 프로젝트 일정
2020.05.01 - 2020.05.31
<br><br>

### ✔ 개요
앤틱가구를 판매하는 회사의 홈페이지
회사의 주력상품의 소개 및 지점의 정보 등을 알아보는 사이트이다
<br><br>

### ✔ 기술 스택
Adobe Xd, Html, Css, Javascript, JQuery
<br><br>

### ✔ 개발 내용
- css 의 keyframe 을 이용하여 애니메이션 효과

``` css
[class *=ani-start] {
	animation-delay: 0s;
	-webkit-animation-delay: 0s;
	animation-duration: 1.0s;
	-webkit-animation-duration: 1;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	animation-direction: alternate;
	-webkit-animation-direction: alternate;
}

.ani_stop {
	animation-name: none !important;
	-webkit-animation-name: none !important;
	opacity: 0;
}

.ani-start-fadeIn {
	animation-name: fadeIn;
	-webkit-animation-name: fadeIn;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
```
``` js
$('[class *= ani-start]').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('ani_stop');
    }
```

- header 부분 스크롤 이벤트
``` js
var st = $(this).scrollTop();
    //header scroll animation
    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
        // downscroll
        if ($('.ham').hasClass('active')) {
        } else {
            $('#header').css('opacity', '0')
            $('#header').removeClass('fixed');
        }

    } else {
        // upscroll
        if (st < 80) {
            $('#header').removeClass('fixed');
        } else {
            $('#header').addClass('fixed');
            $('#header').css('opacity', '1')
        }
    }
    lastScrollTop = st;
```
<br><br>

### ✔ 더 필요한 기술
- [x] 스크롤 이벤트 한번만 실행시키기
- [ ] shop 페이지의 지점 클릭시 팝업창 띄우기

<br><br>
<br><br>