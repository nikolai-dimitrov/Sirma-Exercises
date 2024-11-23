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
		return "playing";
	}
	tune() {
		return "tuning";
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
			} strings is ${super.play()}`
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
			} size is ${super.play()}`
		);
	}
}

const stringInstrument = new StringInstrument("Guitar", "Bass", 7);
const percussionInstrument = new StringInstrument("Drum", "Acoustic", 5);

stringInstrument.tune();
percussionInstrument.tune();
