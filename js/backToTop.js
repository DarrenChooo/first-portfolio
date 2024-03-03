/*
Website for FED CA1 Assignment - Back to top button Javascript
Author : Darren Choo
Date : 8/4/2021

Filename: backToTop.js
*/

//Get the button
var myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, it shows the 'back to top' button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } 
    else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, it scrolls to the top of the website.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}