window.sr = ScrollReveal();
    sr.reveal('.card1, .card2, .card3', {
        duration: 1000,
        origin: 'bottom',
        distance: '200px',
        
        
    });


    sr.reveal('.section__chicaroja, .section__chicacolores, .section__cactus, .section__perla',{
        duration:1000,
        origin: 'bottom',
        distance: '500px',
    })

    sr.reveal('.titulo__trabajos, .titulo__chicaroja, .titulo__chicacolores, .titulo__cactus, .titulo__perla',{
        duration:1000,
        origin: 'left',
        distance: '300px',
        reset: 'true',
    })

    sr.reveal('#footer__contacto',{
        duration:1000,
        distance: '100px',
        reset: 'true',
    })

    