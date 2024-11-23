// 17. E-commerce
/* Create a class hierarchy for an e-commerce system:
 Product: properties id, name, price, and method applyDiscount(discount).
 Subclass Electronics: additional properties warrantyPeriod and brand.
 Subclass Clothing: additional properties size and material. */

class Product {
	constructor(id, name, price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}

	applyDiscount(discount) {
		// this.price = (this.price * discount) / 100
		if (discount >= this.price) {
			console.log(
				`${this.name} with id:${this.id} discount can not be more than it's price.`
			);
			return;
		}

		this.price = this.price - discount;
	}
}

class Electronics extends Product {
	constructor(id, name, price, warrantyPeriod, brand) {
		super(id, name, price);
		this.warrantyPeriod = warrantyPeriod;
		this.brand = brand;
	}
}

class Clothing extends Product {
	constructor(id, name, price, size, material) {
		super(id, name, price);
		this.size = size;
		this.material = material;
	}
}

const clothing = new Clothing("1", "Nike Shirt", 200, "XL", "Cotton");
clothing.applyDiscount(2500);
console.log(clothing);
