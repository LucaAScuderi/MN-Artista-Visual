window.sr = ScrollReveal();     

sr.reveal('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8, .square9, .square10, .square11, .square12, .square13, .square14, .square15, .square16', {
    duration: 2000,
    origin: 'top',
    distance: '500px',
    easing: 'ease-in-out',
});

sr.reveal('.square2, .square5, .square 8, .square10, .squarte 12, .square 15',{
    origin:'left',
})

sr.reveal('.square1, .square4, .square 9, .square11, .squarte 14, .square 16',{
    origin:'right',
})

sr.reveal('.titulo__estilos, .subtitulo__estilos',{
    scale: 0.4,
    duration: 2000,
    delay: 500,
})

sr.reveal('.card1, .card2, .card3, .card4, .card5',{
    origin: 'top',
    distance: '500px',
    duration: 2000,
})

sr.reveal('.card2',{
    delay: 500,
})

sr.reveal('.card3',{
    delay: 1000,
})

sr.reveal('.card5',{
    delay: 500,
})