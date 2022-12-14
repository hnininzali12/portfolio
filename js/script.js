let menuIcon = document.querySelector('.menu-icon');
let asideMenu = document.querySelector('.aside');
var typed = new Typed('.typing', {
        strings: ['Junior Web Developer', 'Freelancer', 'Junior Web designer'],
        typeSpeed: 100,
        BackSpeed: 100,
        loop: true,
    })
    // const textLoad = () => {
    //     setTimeout(() => {
    //         textContent.innerHTML = 'Junior Web developer.'
    //     }, 0)
    //     setTimeout(() => {
    //         textContent.innerHTML = 'Junior Web designer.'
    //     }, 5000)
    //     setTimeout(() => {
    //         textContent.innerHTML = 'Freelancer.'
    //     }, 10000)

// };
// textLoad();
// setInterval(textLoad, 15000);

menuIcon.onclick = function() {
    menuIcon.classList.toggle('active');
    asideMenu.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    if (asideMenu.classList.contains('active') && menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('active');
        asideMenu.classList.remove('active');
    }
})

let box = document.querySelector('.box');
box.addEventListener('touchstart', () => {
    box.classList.add('touch');
    document.querySelector('.box-img').classList.add('touch')
})
box.addEventListener('touchend', () => {
    box.classList.remove('touch');
    document.querySelector('.box-img').classList.remove('touch')
})