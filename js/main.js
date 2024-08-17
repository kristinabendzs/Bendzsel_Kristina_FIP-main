// Home Page Gallery
const lightbox = document.querySelector('#lightbox');
const content = document.querySelector('#lightbox article');
const links = document.querySelectorAll('.flavour-info2 a');

let flavours = [
    {
        name: 'Original Strawberry',
        bio: 'This flavour is our classic. It is the same recipe as before with modified percentages.',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, natural and artiical strawberry flavour, carrageenan, allura red, vitamin A palmitate, vitamin D3.',
    },
    {
        name: 'Chocolate Hazelnut',
        bio: 'Also one of our original flavours, this chocolate milk has hints of hazelnut to really satisfy your cocoa craving.',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, natural and artfical chocolate flavour, cocoa, hazelnut, carrageenan, allura red, vitamin A palmitate, vitamin D3.',
    },
    {
        name: 'Vanilla Banana',
        bio: 'Creamy vanilla mixed with the sweet taste of banana, this drink is perfect for those who want a lighter beverage that is not too rich',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, vanilla extract, natural and artifical banana flavour, disodium phosphate, carrageenan, vitamin A palmitate, vitamin D3',
    },
    {
        name: 'Honeydew Melon',
        bio: 'For those who like a little cirtus kick, this flavour is the one for you. Honeydew melon is great on hot summer days when you need a refresher.',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, natural and artifial honeydew flavour, disodium phosphate, carrageenan, vitamin A palmitate, vitamin D3',
    }
];

function fillContent(e) {
    console.log(this.dataset.heroIndex);

    if(! this.dataset.heroIndex) {
        return;
    }
    content.innerHTML = '';

    let flavourName = document.createElement('h3');
    flavourName.classList = 'lb_heading';
    flavourName.innerText = flavours[this.dataset.heroIndex].name;
    content.appendChild(flavourName);

    let flavourBio = document.createElement('p');
    flavourBio.classList = 'lb_text';
    flavourBio.innerText = flavours[this.dataset.heroIndex].bio;
    content.appendChild(flavourBio);
    
    let flavourIngred = document.createElement('p');
    flavourIngred.classList = 'lb_text2';
    flavourIngred.innerText = flavours[this.dataset.heroIndex].ingredients;
    content.appendChild(flavourIngred);
}

links.forEach(link => link.addEventListener('click', fillContent));

// Burger Icon Function
(function () {
    "use strict";
    console.log('fired');

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();

(() => {
    const slider = document.querySelector('#image-slider');
    const prevBut = document.querySelector('#prev-button');
    const nextBut = document.querySelector('#next-button');
    let slideWidth = slider.clientWidth
    let currentIndex = 0;
    
    function showSlide(index) {
       const newTransformValue = -index * slideWidth + 'px';
       slider.style.transform = 'translateX(' + newTransformValue + ')';
    }
    
    function nextSlide() {
       currentIndex++;
       if (currentIndex >= slider.children.length) {
           currentIndex = 0;
       }
       showSlide(currentIndex);
    }
    
    function prevSlide() {
       currentIndex--;
       if (currentIndex < 0) {
           currentIndex = slider.children.length-1;
       }
       showSlide(currentIndex);
    }
    
    function updateSlideWidth() {
       slideWidth = slider.clientWidth;
       showSlide(currentIndex);
    }
    
    nextBut.addEventListener('click', nextSlide);
    prevBut.addEventListener('click', prevSlide);
    window.addEventListener('resize', updateSlideWidth);
    updateSlideWidth();
    
})();