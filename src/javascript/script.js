$(document).ready(function(){
    $('#mobile-btn').on('click', function(){
        $('#menu-mobile').toggleClass('ativo');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.info', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#depoimento-img', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

});