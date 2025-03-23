import { MenuItem } from "./menuItemConstructor";

// Image Inports
import burgerImage from "../assets/burger.jpg";
import lemonadeImage from "../assets/lemonade.jpg";
import friesImage from "../assets/fries.jpg";
import friedChickenImage from "../assets/fried-chicken.jpg";

export const MenuList = {
    Burger: new MenuItem(
        "Entree",
        "Burger",
        "Juicy, seasoned beef patty topped with melted cheddar cheese, crisp lettuce, ripe tomato, pickles, and house sauce, all nestled in a toasted brioche bun.",
        19.99,
        burgerImage
    ),
    Lemonade: new MenuItem(
        "Beverage",
        "Lemonade",
        "Freshly squeezed lemons blended with just the right amount of sugar and chilled spring water, served over ice for a perfectly balanced sweet and tangy refreshment.",
        4.99,
        lemonadeImage
    ),
    Fries: new MenuItem(
        "Side",
        "Fries",
        "Crispy golden potato fries, lightly salted and fried to perfection, with a fluffy interior and a satisfying crunch. Served with your choice of dipping sauce.",
        3.99,
        friesImage
    ),
    FriedChicken: new MenuItem(
        "Entree",
        "Fried Chicken",
        "Juicy, tender chicken coated in a seasoned buttermilk batter and fried to a crispy golden brown. Served hot with a side of your favorite dipping sauce.",
        19.99,
        friedChickenImage
    ),
};
