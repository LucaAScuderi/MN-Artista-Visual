window.sr = ScrollReveal();


sr.reveal('.quote1, .quote2, .quote3, .quote4, .quote5', {
        duration: 1500,
        origin: 'left',
        distance: '500px',
        easing: "ease-in-out",
        opacity: 0,
});

sr.reveal('.quote2',{
    delay: 200,
})
sr.reveal('.quote3',{
    delay: 400,
})
sr.reveal('.quote4',{
    delay: 600,
})
sr.reveal('.quote5',{
    delay: 800,
})