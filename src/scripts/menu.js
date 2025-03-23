import { Element } from "./elementConstructor";

export const Menu = {
    createMenuContainers: function () {
        this.entreeContainer = new Element(
            "div",
            ["menu-container", "container"],
            "entreeContainer"
        );
        this.beverageContainer = new Element(
            "div",
            ["menu-container", "container"],
            "beverageContainer"
        );
        this.sideContainer = new Element(
            "div",
            ["menu-container", "container"],
            "sideContainer"
        );

        content.appendChild(this.entreeContainer.getElement());
        content.appendChild(this.sideContainer.getElement());
        content.appendChild(this.beverageContainer.getElement());
    },

    createContainerTitle: function () {
        const entreeTitle = new Element(
            "h2",
            ["container-title"],
            "",
            "Entrees"
        );
        const beverageTitle = new Element(
            "h2",
            ["container-title"],
            "",
            "Beverages"
        );
        const sideTitle = new Element("h2", ["container-title"], "", "Sides");

        this.entreeContainer.getElement().appendChild(entreeTitle.getElement());
        this.beverageContainer
            .getElement()
            .appendChild(beverageTitle.getElement());
        this.sideContainer.getElement().appendChild(sideTitle.getElement());
    },

    createMenuItems: function (menu) {
        for (const item of Object.values(menu)) {
            const type = item.type;
            const name = item.name;
            const description = item.description;
            const price = item.price;
            const image = item.image;

            const menuItemName = new Element("h2", ["item-title"], "", name);
            const menuItemDescription = new Element(
                "p",
                ["container-text"],
                "",
                description
            );
            const menuItemPrice = new Element(
                "h3",
                ["item-price"],
                "",
                "$" + price
            );
            const menuItemImage = new Element("img", ["item-image"]);
            menuItemImage.getElement().src = image;

            const menuItem = new Element("div", ["menu-item-container"]);

            menuItem.getElement().appendChild(menuItemName.getElement());
            menuItem.getElement().appendChild(menuItemDescription.getElement());
            menuItem.getElement().appendChild(menuItemPrice.getElement());
            menuItem.getElement().appendChild(menuItemImage.getElement());

            if (type === "Entree") {
                this.entreeContainer
                    .getElement()
                    .appendChild(menuItem.getElement());
            } else if (type === "Beverage") {
                this.beverageContainer
                    .getElement()
                    .appendChild(menuItem.getElement());
            } else if (type === "Side") {
                this.sideContainer
                    .getElement()
                    .appendChild(menuItem.getElement());
            }
        }
    },
};
