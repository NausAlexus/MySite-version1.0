/*Логотип с parallax effect*/
$('.background').on('mousemove',(e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.logo_background').css(
        'transform',
        'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
    );
    $('.logo').css(
        'transform',
        'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
    );
});