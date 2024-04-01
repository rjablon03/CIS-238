/*
    Author: Ryan Jablonski
    File Name: script.js
    Date: 4/1/24
*/

// Global Variables
const video = document.getElementById("example");
const videoSource = document.getElementById("vid-src")
const descriptionSource = document.getElementById("despsrc");

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

// Function to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display a promo code
function discount() {
    const promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}