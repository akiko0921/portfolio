$(function () {
    //ここの中に記述
    $('.wrapper').delay(600).fadeIn(1700);


    
    // トップへボタン
    let topBtn = $('.top');
    topBtn.hide();
    //スクロールが1000に達したらボタン表示
    $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
           }
    });

    // ハンバーガー

    $('.sp_btn, .sp_nav li').on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');

    });

    // デイリースライダー

    $('.daily').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: 1700,
        centerMode: true,
        centerPadding: '7%',
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    // centerMode: false,
                }
            }
        ]
    });

    // ワークススライダー

    $('.works_slider').slick({
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '10%',
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '5%',
                }
            }
        ]
    })

    const $slider = $(".js-slider");

    $slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
        $slider.find(".slick-slide").each((index, el) => {
            const $this = $(el),
                slickindex = $this.attr("data-slick-index");
            if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
                if (slickindex == "-1") {
                    $this.addClass("is-active-next");
                } else {
                    $this.removeClass("is-active-next");
                }
            } else if (nextSlide == 0) {
                if (slickindex == slick.slideCount) {
                    $this.addClass("is-active-next");
                } else {
                    $this.removeClass("is-active-next");
                }
            } else {
                $this.removeClass("is-active-next");
            }
        });
    });



});

//  要素がふわっと出てくる

$(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
        }
    });
});