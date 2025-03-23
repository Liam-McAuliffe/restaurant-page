// CSS imports
import "./styles/styles.css";
import "./styles/reset.css";

// JS imports
import { Home } from "./scripts/home";
import { Menu } from "./scripts/menu";
import { About } from "./scripts/about";
import { Config } from "./scripts/config";
import { MenuList } from "./scripts/menuList";

// Home page
function switchHome() {
    clearContent();

    // Add home page elements
    Home.createTitle(Config.restaurantName);
    Home.createReview(Config.reviewName, Config.reviewText);
    Home.createHours();
    Home.createLocation();
}

// Menu page
function switchMenu() {
    clearContent();

    // Add menu page elements
    Home.createTitle(Config.restaurantName);
    Menu.createMenuContainers();
    Menu.createContainerTitle();
    Menu.createMenuItems(MenuList);
}

// About page
function switchAbout() {
    clearContent();

    // Add about page elements
    Home.createTitle(Config.restaurantName);
    About.renderAbout();
}

function clearContent() {
    content.innerHTML = "";
}

// Init
function init() {
    // Define contant element
    const content = document.getElementById("content");

    // Start on home page
    switchHome();

    // Add event listeners to the nav buttons
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", switchHome);

    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", switchMenu);

    const aboutButton = document.getElementById("aboutButton");
    aboutButton.addEventListener("click", switchAbout);
}

init();
