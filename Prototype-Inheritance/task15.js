// 15. Smart Devices
/* Create a class hierarchy for smart devices:
 Device: properties brand, model, batteryLife, and methods charge() and turnOn().
 Subclass Smartphone: additional properties screenSize and os, override charge() to
include charging time for smartphones.
 Subclass Smartwatch: additional properties strapMaterial and waterResistance,
override charge() to include charging time for smartwatches.*/

class Device {
	constructor(brand, model, batteryLife) {
		this.brand = brand;
		this.model = model;
		this.batteryLife = batteryLife;
	}

	charge() {
		console.log(`${this.brand} ${this.model} is charging.`);
	}

	turnOn() {
		console.log(`${this.brand} ${this.model} is turned on.`);
	}
}

class Smartphone extends Device {
	constructor(brand, model, batteryLife, screenSize, os) {
		super(brand, model, batteryLife);
		this.screenSize = screenSize;
		this.os = os;
	}
	charge() {
		console.log(
			`${this.brand} ${this.model} will be fully charged in 2 hours.`
		);
	}
}

class Smartwatch extends Device {
	constructor(brand, model, batteryLife, strapMaterial, waterResistance) {
		super(brand, model, batteryLife);
		this.strapMaterial = strapMaterial;
		waterResistance = waterResistance;
	}
	charge() {
		console.log(
			`${this.brand} ${this.model} will be fully charged in 1 hour.`
		);
	}
}

const smartWatch = new Smartwatch("Apple", "8", 10, "steel", "yes");
console.log(smartWatch);
smartWatch.charge();
