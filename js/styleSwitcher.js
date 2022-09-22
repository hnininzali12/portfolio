const styleSwitchToggler = document.querySelector('.style-switch-toggler');

styleSwitchToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open')
})

// scroll window hidden theme color 
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

// theme color change
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}