import { Element } from "./elementConstructor";
import { Config } from "./config";

export const Home = {
    // Add title
    createTitle: function (title) {
        const resturantTitle = new Element(
            "h1",
            ["restaurant-title"],
            "",
            title
        );

        content.appendChild(resturantTitle.getElement());
    },

    createReview: function (name, review) {
        // Create review
        const reviewContainer = new Element("div", [
            "review-container",
            "container",
        ]);
        const reviewName = new Element("h3", ["review-name"], "", "- " + name);
        const reviewText = new Element("p", ["container-text"], "", review);

        content.appendChild(reviewContainer.getElement());
        reviewContainer.getElement().appendChild(reviewText.getElement());
        reviewContainer.getElement().appendChild(reviewName.getElement());
    },

    createHours: function () {
        // Create hours
        const hourContainer = new Element("div", [
            "hour-container",
            "container",
        ]);
        const hourTitle = new Element(
            "h2",
            ["hour-title", "item-title"],
            "",
            "Hours"
        );

        content.appendChild(hourContainer.getElement());
        hourContainer.getElement().appendChild(hourTitle.getElement());

        // Create hours for each day
        for (const day in Config.weekHours) {
            const hours = Config.weekHours[day];
            const startHour = hours[0];
            const endHour = hours[1];

            const hourString = `${day}: ${startHour}am - ${endHour}pm`;

            const dayHours = new Element(
                "p",
                ["hour", "container-text", "center"],
                "",
                hourString
            );

            hourContainer.getElement().appendChild(dayHours.getElement());
        }
    },

    createLocation: function () {
        const locationContainer = new Element("div", [
            "location-container",
            "container",
        ]);
        content.appendChild(locationContainer.getElement());

        const locationTitle = new Element(
            "h2",
            ["location-title", "item-title"],
            "",
            "Location"
        );
        locationContainer.getElement().appendChild(locationTitle.getElement());

        const locationText = new Element(
            "p",
            ["location", "container-text", "center"],
            "",
            Config.address
        );
        locationContainer.getElement().appendChild(locationText.getElement());
    },
};
