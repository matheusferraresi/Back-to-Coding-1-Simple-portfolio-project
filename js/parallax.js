document.addEventListener('DOMContentLoaded', () => {

    const parallaxBG = document.querySelector('.parallax--bg');
    const parallaxBox = document.querySelector('.parallax--box');

    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        parallaxBG.style.backgroundPosition = 'center ' + (scroll * 0.6) + 'px';
        parallaxBox.style.top = (-4+(scroll * 0.0050)) + 'em';
    });
});