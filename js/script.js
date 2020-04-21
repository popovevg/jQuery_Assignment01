$(()=> {
    $('section > h2, aside > h2').css('border-style', 'solid')
                                .css('border-color', 'black')
                                .css('border-width', '1px');
    $('section > h2, aside > h2').css('color', '#CC1C0D');
    $('section > h2, aside > h2').css('padding', '3px 0 3px 20px');
    $('section > h2, aside > h2').css('border-radius', '0 5px 0 5px');
    $('section > h2, aside > h2').css('background-color', '#DFE3E6');

    $('nav ul li a').addClass('navigation');
    $('.navigation').css('border-style', 'solid')
                    .css('border-color', '#929CA4')
                    .css('border-width', '1px');
    $('.navigation').css('color', '#CC1C0D');
    $('.navigation').css('padding', '3px 0 3px 20px');
    $('.navigation').css('background-color', '#DFE3E6');

    $('section p').removeClass();
    $('aside p:eq(1)').append('<br>Chevy Dealers Association');
    $('aside p:eq(0)').wrapInner('<q></q>');
})