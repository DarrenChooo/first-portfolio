/*
Website for FED CA1 Assignment - Cover page animation Javascript
Author : Darren Choo
Date : 8/4/2021

Filename: pictureAnimation.js
*/

/* Use of Javascript arrays for picture */
const picture = document.getElementsByClassName('picture')[0];
const blocks = document.getElementsByClassName('blocks');

/* At laptop size activate this animation */
if(window.innerWidth > 992) {
    /* Every block it adds 0.04s delay */
    for (var i=1; i<150; i++) {
    picture.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay = `${i * 0.04}s`;
    }
}
