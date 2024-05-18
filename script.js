var search = document.getElementById("search");
var header = document.getElementById('header');
var searchhide = document.getElementById('searchContainer')
var closesearch = document.getElementById("closesearch")
var InputText = document.getElementById("input-text")
var Button = document.getElementById("Button")
let openMenu = document.querySelector(".humburgermenu");
function sendEmail() {
    window.location.assign("mailto:xyz@abc.com");
}

search.addEventListener("click", function () {
    header.style = "display: none";
    searchhide.style = "display: block";
});
closesearch.addEventListener("click", function () {
    searchhide.style = "display:none"
    header.style = "display:block"
}
);

openMenu.addEventListener("click", function () {
    let mainNav = document.querySelector(".navigation");
    console.log(mainNav);
    mainNav.classList.toggle("show-Menu");
})

let closebtn = document.querySelector(".toggleCross");
closebtn.addEventListener("click", function () {
    let mainNav = document.querySelector(".navigation");
    mainNav.classList.remove("show-Menu");

})
