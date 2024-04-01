/*
    Author: Ryan Jablonski
    File Name: script.js
    Date: 4/1/24
*/

// Hamburger menu fuction
function hamburger() {
    const menu = document.getElementById("menu-links");
    const logo = document.getElementById("ffc-logo");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    }

    else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}