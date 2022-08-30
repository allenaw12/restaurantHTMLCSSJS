//Hamburger Nav Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//food price and info on click
// const foodPics = document.querySelectorAll('.food-item')
// foodPics.forEach((n,k) => n.addEventListener("click", showInfo))

// function showInfo() {
//     console.log('displaying')
//     document.querySelector('.food-info').style.display = "inline-block"
// }

// const foodInfo = document.querySelectorAll('.food-info')
// foodInfo.forEach(n => n.addEventListener('click', hideInfo))

// function hideInfo() {
//     console.log('hiding')
//     document.querySelector('.food-info').style.display = "none"
// }