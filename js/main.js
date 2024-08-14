// variables
const lightbox = document.querySelector('#lightbox');
const content = document.querySelector('#lightbox article');
const links = document.querySelectorAll(".flavour-info a");

let flavours = [
    {
        name: 'Original Strawberry',
        bio: 'This flavour is our classic. It is the same recipe as before with modified percentages.',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, natural and artiical strawberry flavour, carrageenan, allura red, vitamin A palmitate, vitamin D3.'
    },
    {
        name: 'Chocolate Hazelnut',
        bio: 'Also one of our original flavours, this chocolate milk has hints of hazelnut to really satisfy your cocoa craving.',
        ingredients: 'Ingredients: Partly skimmed milk, sugar, natural and artfical chocolate flavour, cocoa, hazelnut, carrageenan, allura red, vitamin A palmitate, vitamin D3.'
    },
    {
        name: 'Vanilla Banana',
        bio: 'Creamy vanilla mixed with the sweet taste of banana, this drink is perfect for those who want a lighter beverage that is not too rich',
        ingredients: 'Partly skimmed milk, sugar, vanilla extract, natural and artifical banana flavour, disodium phosphate, carrageenan, vitamin A palmitate, vitamin D3',
    },
    {
        name: 'Honeydew Melon',
        bio: 'For those who like a little cirtus kick, this flavour is the one for you. Honeydew melon is great on hot summer days when you need a refresher.',
        ingredients: 'Partly skimmed milk, sugar, natural and artifial honeydew flavour, disodium phosphate, carrageenan, vitamin A palmitate, vitamin D3',
    }
];

// functions 
function fillContent() {
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

// event listeners 
links.forEach(link => link.addEventListener('click', fillContent));