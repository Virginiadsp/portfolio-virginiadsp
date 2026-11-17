/*Efeito revelar*/
//Para fazer esse efeito você precisa criar classes novas nas div que você deseja fazer
//.efeito-p e .efeito--img são as classes

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-p', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.efeito-proj1', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.efeito-proj2', {
    duration: 2000,
    distance: '90px',
    delay: 1000
  
})

revelar.reveal('.efeito-proj3', {
    duration: 2000,
    distance: '90px',
    delay: 1500
})

revelar.reveal('.sobre-efeito', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})

revelar.reveal('.soft-efeito', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})

revelar.reveal('.hard-efeito', {
    duration: 2000,
    distance: '90px',
    delay: 1000,
    origin: 'bottom'
})

revelar.reveal('.form-efeito', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.links-efeito', {
    duration: 2000,
    distance: '90px',
    delay: 700,
    origin: 'right'
})


