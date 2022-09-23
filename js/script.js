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

const imageBox = document.querySelector('.box');
imageBox.addEventListener('click', () => {
    imageBox.classList.toggle('touch');
})

window.addEventListener('scroll', () => {
    if (imageBox.classList.contains('touch')) {
        imageBox.classList.remove('touch');
    }
})