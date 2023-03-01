
let menuToggle = document.querySelector(".menu");
let links = document.querySelector(".links");
let openList = document.querySelector(".open-list");
// nested List Btn
let product = document.getElementById("product");
let company = document.getElementById("company");
let contact = document.getElementById("connect");

// nested Lists
let listOne = document.querySelector(".list-one");
let listTwo = document.querySelector(".list-two");
let listThree = document.querySelector(".list-three");


// Show Side Bar
menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
    openList.classList.toggle("fa-times");
});

// show nested list
const show = (element, arrowUp) => {
    element.classList.toggle("active-list");
    arrowUp.firstElementChild.classList.toggle("up");
}

product.addEventListener("click", () => show(listOne, product));
company.addEventListener("click", () => show(listTwo, company));
contact.addEventListener("click", () => show(listThree, contact));

