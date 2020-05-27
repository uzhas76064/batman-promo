$(document).ready(function () {
    new WOW().init();

    let tabsItem = $('.tabs-item');
    console.log(tabsItem);

    tabsItem.on('click', function(e) {
        e.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tab-active').toggleClass('tab-active');
        $(this).toggleClass('tab-active');
    });
});