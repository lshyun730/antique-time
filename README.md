# Antique Time

<br>

### ✔ Project Schedule

2020.05.01 - 2020.05.31
<br><br>

### ✔ Project Outline

앤틱가구를 판매하는 회사의 홈페이지.
회사의 주력상품의 소개 및 지점의 정보 등을 알아보는 사이트이다<br>
アンティーク家具を販売する会社のホームページ。
会社と主力製品の紹介や支店の情報などを調べることができる。

Click [demo](https://lshyun730.github.io/antique-time/index.html)
<br><br>

### ✔ Technology Stack

Adobe Xd, Html, Css, Javascript, JQuery
<br><br>

### ✔ Reference Site

#### Design Reference

-   [lincorwatches](https://lincorwatches.com/en/)
-   [Lloyd's Antiques](https://www.lloyds.co.jp/)
-   [openark](https://openark.or.jp/)
-   [vico](https://vico-co.jp/)
-   [queengarnet](https://www.queengarnet.com/)
-   [havenly](https://havenly.com/)

#### Code Reference

-   [goze-movie](https://goze-movie.com/) (scroll event)
-   [joloves](https://www.joloves.com/) (header scroll event and main page design)
    <br><br>

### ✔ Specificity

-   The animation effect using the keyframe of css (14 scroll events such as fade in, fade up, fade down etc)　<br>

#### CSS [git code (311-732 行)](https://github.com/lshyun730/antique-time/blob/main/css/common.css)

```css
[class*='ani-start'] {
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
}

.ani-start {
    animation-name: fadeDown;
    -webkit-animation-name: fadeDown;
}

.ani_stop {
    animation-name: none !important;
    -webkit-animation-name: none !important;
    opacity: 0;
}

@keyframes fadeDown {
    0% {
        transform: translateY(-50px);
        -webkit-transform: translateY(-50px);
        -moz-transform: translateY(-50px);
        -ms-transform: translateY(-50px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        opacity: 1;
    }
}
```

#### JS

```js
$('[class *= ani-start]').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('ani_stop');
    }
```

<br>

-   Header scroll event

```js
var st = $(this).scrollTop();
//header scroll animation
if (st > lastScrollTop && lastScrollTop > 0) {
    // downscroll
    if ($('.ham').hasClass('active')) {
    } else {
        $('#header').css('transform', 'translate(-50%, -100px)');
        $('#header').removeClass('fixed');
    }
} else {
    // upscroll
    if (st < 80) {
        $('#header').removeClass('fixed');
    } else {
        $('#header').addClass('fixed');
        $('#header').css('transform', 'translate(-50%, 0)');
    }
}
lastScrollTop = st;
```

<br><br>

### ✔ Areas for Improvement

-   [ ] 반응형 웹사이트로 개선 / responsive ウェブサイトに改善
-   [ ] 순수 자바스크립트로도 코드 짜보기 / バニラジャバスクリプトでコードを作成してみる

<br><br>
<br><br>
