let judul = document.getElementById('judul')
let DIY = document.getElementById('DIY')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    judul.style.marginTop = value * 1.5 + 'px';
    DIY.style.bottom = value * 1.5 + 'px';
});