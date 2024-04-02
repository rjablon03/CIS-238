/**
 * Author: Ryan Jablonski
 * File Name: scripts.js
 * Date: 4/1/24
 */

function hamburger() {
    const links = document.getElementById("menu-links");

    if (links.style.display === "block") {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
}