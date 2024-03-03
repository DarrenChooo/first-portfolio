/*
Website for FED CA1 Assignment - Fading text animation Javascript
Author : Darren Choo
Date : 8/4/2021

Filename: fadeText.js
*/

//Split text into letters by creating span classes
let smokeText = document.querySelector('.smokeText')
smokeText.innerHTML = smokeText.textContent.replace(/\S/g, "<span>$&</span> ")

let letters = document.querySelectorAll('span')
//When mouse is hovering over the letters in div class of span, it adds another class called 'active'. This active will trigger an animation in CSS.
for (let i = 0; i<letters.length; i++) {
    letters[i].addEventListener("mouseover", function(){
        letters[i].classList.add('active')
    })
}