$(document).ready(function () {
//Animation content on main-page
    $('#main-h1').addClass("show");
    $('.main-page__tech').addClass("show");
    $('.animate-mouse').addClass("show");

//Show/hide menu
    $('.header__menu').click(function () {
        $(this).toggleClass('open');
        $('.nav').toggleClass('show');
    });

//Mouse icon onclick move to next page
    var mouse = document.querySelector('.animate-mouse');
    mouse.addEventListener('click', function () {
        $('.main-page').removeClass('active').addClass('hide-up');
        $('.wrapper-show-sections').removeClass('hide-down').addClass('active');
    });
//Scroll to the next/previous page

    var sectionsWraper = $('.page-wrapper');
    var section = 'section';
    var sectionLast = $('section:last-child');
    var isScrolling = false;

    var nextSection = function () {

        // if (isScrolling) {
        //     return;
        // }
        //
        // isScrolling = true;
        //
        // setTimeout(function () {
        //     isScrolling = false;
        // }, 1000);
        $('.main-page').addClass('hide-up').removeClass('active');
        $('.wrapper-show-sections').removeClass('hide-down').addClass('active');
    };


    function previousSection() {
        // if (isScrolling) {
        //     return;
        // }
        //
        // isScrolling = true;
        //
        // setTimeout(function () {
        //     isScrolling = false;
        // }, 1000);

            $('.wrapper-show-sections')
                .addClass('hide-down')
                .removeClass('active');

        $('.main-page').addClass('active').removeClass('hide-up');

    }

    $(window).bind('mousewheel', function (event) {
        var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        console.log(delta);
        var target = event.target;
        if (delta > 0) {
            // upscroll code
            if (target.targetName = $('div.wrapper-show-sections')){
            // previousSection();
            }
            console.log('up');

        } else {
            console.log(sectionLast);
            if (target.targetName = $('section.main-page')) {
                nextSection();
            }
            console.log('down');
        }
    });
});

