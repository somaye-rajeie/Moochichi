const shoppingCart = document.querySelector('.header__shopping-cart')
const shoppingCartDropdown = document.querySelector('.header__shopping-cart-dropdown')
shoppingCart.addEventListener('mouseover', function () {

    shoppingCartDropdown.style.display = 'block';

})
shoppingCart.addEventListener('mouseout', function () {

    shoppingCartDropdown.style.display = 'none';

})

// Click event on nav-toggle
const headerBottom = document.querySelector('.header__bottom')
const navToggle = document.querySelector('.nav-toggle')
navToggle.addEventListener('click', function () {
    this.classList.toggle('nav-toggle--open')
    headerBottom.classList.toggle('menu--open')
})
// Click event on view-more-btn
const viewBtn = document.querySelector('.view-more-btn');
const popularProduct = document.querySelector('.popular-products__content .popular-products__content-item:last-child');
viewBtn.addEventListener('click', function () {
    if (popularProduct.style.display === 'none') {
        popularProduct.style.display = 'block';
        viewBtn.innerHTML = 'مشاهده کمتر';
    } else {
        popularProduct.style.display = 'none';
        viewBtn.innerHTML = 'مشاهده بیشتر';
    }
})

//  initialize Swiper in JS:
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});