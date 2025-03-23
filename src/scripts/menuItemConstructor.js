export class MenuItem {
    constructor(type, name, description, price, image) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    getMenuItem() {
        return {
            type: this.type,
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image,
        };
    }
}
