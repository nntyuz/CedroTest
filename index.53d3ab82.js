const $f3cc3a8908d01dd6$var$swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 5,
    breakpoints: {
        600: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
const $f3cc3a8908d01dd6$var$modal = document.querySelector('.modal');
const $f3cc3a8908d01dd6$var$cross = document.querySelector('.cross');
const $f3cc3a8908d01dd6$var$burger = document.querySelector('.burger-hover');
function $f3cc3a8908d01dd6$var$openModal() {
    $f3cc3a8908d01dd6$var$modal.classList.toggle('open');
    if ($f3cc3a8908d01dd6$var$modal.classList.contains('open')) document.body.style.cssText = 'overflow:hidden;';
}
function $f3cc3a8908d01dd6$var$closeModal() {
    if ($f3cc3a8908d01dd6$var$modal.classList.contains('open')) {
        $f3cc3a8908d01dd6$var$modal.classList.remove('open');
        document.body.style.cssText = 'overflow:visible;';
    }
}
$f3cc3a8908d01dd6$var$burger.addEventListener('click', $f3cc3a8908d01dd6$var$openModal);
$f3cc3a8908d01dd6$var$cross.addEventListener('click', $f3cc3a8908d01dd6$var$closeModal);
document.getElementById("eye").addEventListener("click", function(e) {
    const passwordShow = document.getElementById("old-password");
    if (passwordShow.getAttribute("type") == "password") passwordShow.setAttribute("type", "text");
    else passwordShow.setAttribute("type", "password");
});


//# sourceMappingURL=index.53d3ab82.js.map
