$(function(){
	$('.first-screen__slider').slick({
        prevArrow: '<button type="button" class="first-screen__prev first-screen__arrows"></button>',
        nextArrow: '<button type="button" class="first-screen__next first-screen__arrows"></button>',
        dots: true,
        dotsClass: 'first-screen__dots',
        appendDots: $('.first-screen'),
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    arrows: false
                }
            }
        ]
    });
	$('.top-trending__dots').on("click", ".top-trending__dot", function() {
	    $(this).addClass('top-trending__dot--active').siblings().removeClass('top-trending__dot--active');
	});
    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    $(".shopping__cart-body").mCustomScrollbar({
        axis: 'y',
        scrollInertia: '60',
        mouseWheel: {
            deltaFactor: 100
        }
    });
    $('.header__basket').on('click', function () {
       $('.basket__on').addClass('basket__on--active')
    });
    $('.shopping__cart-exit').on('click', function () {
        $('.basket__on').removeClass('basket__on--active')
    });
    $('.header__search').on('click', function () {
       $('.search__form').toggleClass('search__form--active')
    });
    $('.header-top__link').on('click', function (e) {
        e.preventDefault();
    });
    $('.header__link').on('click', function () {
       $('.share__drop').toggleClass('share__drop--active')
    });
    $('.languages__drop-items').on('click', '.languages__drop-item', function() {
        $(this).addClass('languages__drop-item--active').siblings().removeClass('languages__drop-item--active');
    });
    $('.header__languages-btn').on('click', function () {
        $('.languages__drop').toggleClass('languages__drop-items--active')
    });
    $('.filter__content-choices__checkbox-input, .catalog__content-main__sortby-select').styler();
    $('.filter__content-drop__item-title').on('click', function () {
       $(this).toggleClass('filter__content-drop__item-title--active');
       $(this).next().slideToggle(200);
    });
    $('.filter__content-drop__item-type').on('click', function(){
        $(this).toggleClass('filter__content-drop__item-type--active');
    });
    $('.pagination__list-item').on('click', function () {
       $(this).addClass('pagination__list-item--active').siblings().removeClass('pagination__list-item--active');
    });
    $('.menu__btn').on('click', function () {
       $(this).toggleClass('menu__btn--active');
       $('.menu__list').slideToggle('menu__list--active');
    });
});