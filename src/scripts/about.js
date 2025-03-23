import { Config } from "./config";
import { Element } from "./elementConstructor";

export const About = {
    // Craete conntainers
    createContainers: function () {
        const contactContainer = new Element("div", ["container"]);
        const aboutContainer = new Element("div", ["container"]);
        return { contactContainer, aboutContainer };
    },
    createTitles: function () {
        const contactTitle = new Element("h2", ["item-title"], "", "Contact");
        const aboutTitle = new Element("h2", ["item-title"], "", "About");
        return { contactTitle, aboutTitle };
    },
    createText: function () {
        const contactText = new Element(
            "p",
            ["item-text"],
            "",
            `Phone: ${Config.phone} <br> Email: ${Config.email}`
        );
        const aboutText = new Element("p", ["item-text"], "", Config.about);
        return { contactText, aboutText };
    },
    renderAbout: function () {
        const { contactContainer, aboutContainer } = this.createContainers();
        const { contactTitle, aboutTitle } = this.createTitles();
        const { contactText, aboutText } = this.createText();

        content.appendChild(contactContainer.getElement());
        content.appendChild(aboutContainer.getElement());

        contactContainer.getElement().appendChild(contactTitle.getElement());
        contactContainer.getElement().appendChild(contactText.getElement());

        aboutContainer.getElement().appendChild(aboutTitle.getElement());
        aboutContainer.getElement().appendChild(aboutText.getElement());
    },
};
