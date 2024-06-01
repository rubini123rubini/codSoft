let menuu = document.querySelector('#menu');
let na = document.querySelector('.na');

menuu.onclick = () =>{
    menuu.classList.toggle('bx-x');
    na.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    menuu.classList.remove('bx-x');
    na.classList.remove('active');

};



ScrollReveal({ 
    reset: true ,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.ab, .heading', { origin: 'top' });
ScrollReveal().reveal('.im, .certificates, .project, .skill, .content form', { origin: 'bottom' });

ScrollReveal().reveal('.ab h2 ', { origin: 'left' });

ScrollReveal().reveal('.ab h3, .pro1 ', { origin: 'right' });


const typed = new Typed('.mmm', {
    strings: ['ENGINEER',' DEVELOPER','programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

