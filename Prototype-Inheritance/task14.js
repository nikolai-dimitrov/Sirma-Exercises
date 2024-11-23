// 14. Musical Instruments
/* Create a class hierarchy for musical instruments:
 Instrument: properties name and type, methods play() and tune().
 Subclass StringInstrument: additional property numberOfStrings, override tune() to
print a specific message for string instruments.
 Subclass PercussionInstrument: additional property drumSize, override tune() to
print a specific message for percussion instruments. */

class Instrument {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	play() {
		console.log(`The ${this.type} ${this.name} is playing`);
	}
	tune() {
		console.log(`The ${this.type} ${this.name} is tuning`);
	}
}

class StringInstrument extends Instrument {
	constructor(name, type, numberOfStrings) {
		super(name, type);
		this.numberOfStrings = numberOfStrings;
	}
	tune() {
		console.log(
			`The ${this.type} ${this.name} with ${
				this.numberOfStrings
			} strings is tuning`
		);
	}
}

class PercussionInstrument extends Instrument {
	constructor(name, type, drumSize) {
		super(name, type);
		this.drumSize = drumSize;
	}
	tune() {
		console.log(
			`The ${this.type} ${this.name} with ${
				this.numberOfStrings
			} size is tuning`
		);
	}
}

const stringInstrument = new StringInstrument("Guitar", "Bass", 7);
const percussionInstrument = new StringInstrument("Drum", "Acoustic", 5);

stringInstrument.tune();
percussionInstrument.tune();
