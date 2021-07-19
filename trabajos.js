window.sr = ScrollReveal();
    
    sr.reveal('.card1, .card2, .card3', {
        duration: 1000,
        origin: 'bottom',
        distance: '200px',
        rotate:{
            x:10,
            y:100,
        },
        delay: 400,
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

    
    