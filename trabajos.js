window.sr = ScrollReveal();
    
    sr.reveal('.card1, .card2, .card3', {
        duration: 1000,
        origin: 'top',
        rotate:{
            x:10,
            y:100,
        },
        delay: 400,
        
    });

    
    sr.reveal('.card3',{
        origin: 'bottom'
    })

    sr.reveal('.titulo__trabajos',{
        opacity: 0,
        duration: 1000,
        scale: 0.3,
    })


    sr.reveal('.section__chicaroja, .section__chicacolores, .section__cactus, .section__perla',{
        duration:1000,
        origin: 'bottom',
        distance: '500px',
        
    })

    
    