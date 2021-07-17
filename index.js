window.sr = ScrollReveal();
    
    sr.reveal('#fondo__pagina',{
    opacity: 0,
    duration: 1000,
    scale: .3,
    interval: 1000,
    })

    sr.reveal('#titulo__nombre, #estilo__palabra__menu',{
        duration: 1000,
        origin: 'top',
        distance: '100px',
        reset: 'true',
    })
    
    sr.reveal('#titulo__nombre',{
        origin: 'left',
        distance: '300px'
    })

    sr.reveal('.titulo__presentacion',{
        duration:1000,
        origin: 'left',
        distance: '300px',
        reset: 'true',
    })
    

