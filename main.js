// console.log(document)

var linediv = document.querySelector(".line")
var showlink = document.querySelector(".mobile-link-holder")
// console.log(linediv)

var mybackdrop = document.querySelector(".backdrop")
// var mobilelinks = document.querySelector(".mobile-links-holder")


function dosomething(){
    linediv.classList.toggle("showburger")
    showlink.classList.toggle("show-mobile-link-holder")
    // mobilelinks.classList.toggle("show-mobile-links-holder")
    mybackdrop.classList.toggle("showbackdrop")
}