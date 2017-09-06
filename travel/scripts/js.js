$(document).ready(function () {
    let logoWrapper = $('.logo-info-wrapper');
    let mainNav = $('.main-nav');
    let body = $('body');
    let upTopBtn = $('.hover-top-btn');

    //if we refresh the page after we scrolled
    if(body.scrollTop() > 0) {
        logoWrapper.css('display', 'none');
        mainNav.css('position', 'fixed');
        mainNav.css({position: 'fixed', height: '45px'});
        upTopBtn.css({display: 'block'});
    }

    //to remove/show the logo and other info, also to make the nav fixed position
    //remove/show up to top button
    $(window).scroll(function() {
        if( $('body').scrollTop() > 0) {
            logoWrapper.css('display', 'none');
            mainNav.css({position: 'fixed', height: '45px'});
            upTopBtn.fadeIn(1000);
        }else {
            logoWrapper.css('display', 'block');
            mainNav.css({position: 'static', height: '46px'});
            upTopBtn.css({display: 'none'});
        }
    });

    //on mouseenter to show the drop down menu
    let hoverHiddenMenus = $('.hover-hidden-menus');

    $('.main-nav-ul li').mouseenter(function () {
        hoverHiddenMenus.css({display: 'none'});
        showHidenMenu($(this).attr('data-number'));
    });

    //on mouseleave drop menuto da se skriva
    $(hoverHiddenMenus).mouseleave(function() {
        $(hoverHiddenMenus).css({display: 'none'});
    });

    $(mainNav).mouseleave(function () {
        $(hoverHiddenMenus).css({display: 'none'});
    });

    function showHidenMenu(num) {
        $(`#hidden-hover-menu-${num}`).css({display: 'block'});
    }

    //gallery
    let galleryNum = 2;
    let galleryBtnNum = 1;
    let sliderHeading = $('#slider-headings-wrapper a');

    let gallerySetInterval = setInterval(function () {
        if(galleryNum === 1) {
            $(`#slider-img-1`).attr('src',`images/slider${galleryNum}.jpg`).fadeIn();
            galleryNum++;
            sliderHeading.text('ПОЧИВКИ 2017');
        }else {
            $(`#slider-img-1`).attr('src',`images/slider${galleryNum}.jpg`).fadeIn();

            switch(galleryNum) {
                case 2:
                    sliderHeading.text('EКЗОТИКА 2017');
                    break;
                case 3:
                    sliderHeading.text('ЕКСКУРЗИИ 2017');
                    break;
                case 4:
                    sliderHeading.text('САМОЛЕТНИ БИЛЕТИ');
                    break;
                case 5:
                    sliderHeading.text('КРУИЗИ');
                    break;
                default:
            }

            galleryNum++;

            if(galleryNum === 5) {
                galleryNum = 1;
            }
        }

        if(galleryBtnNum === 5) {
            $(`#gallery-btn-5`).css('opacity', 0.6);
            $(`#gallery-btn-1`).css('opacity', 1);
            galleryBtnNum = 1;
        }else {
            $(`#gallery-btn-${galleryBtnNum}`).css('opacity', 0.6);
            $(`#gallery-btn-${++galleryBtnNum}`).css('opacity', 1);
        }
    }, 4000);

    //change img after click on the buttons bottom on the gallery
    //change button collors and setTimeout not working
    $('.gallery-btn').click(function () {
        let galleryBtnAttr = $(this).attr('id');
        let lastChar = galleryBtnAttr.substr(-1);
        $(`#slider-img-1`).attr('src',`images/slider${lastChar}.jpg`).fadeIn();
        setTimeout(gallerySetInterval(), 4000);
    });

    //scroll top btn
    $(upTopBtn).click(function () {
            $('body').animate({scrollTop : 0});
    });

    //zoom the article images
    $('.top-offers-section article img ').mouseenter(function () {
        $(this).addClass('zoomImg');
    }).mouseleave(function () {
        $(this).removeClass('zoomImg');
    });
});
