const barIcon = document.querySelector("header .links-holder .bars-icon");
const headerLinks = document.querySelector("header .links-holder ul.links");


barIcon.addEventListener("click", () => {
    headerLinks.classList.toggle("hidden-mobile");
    
});