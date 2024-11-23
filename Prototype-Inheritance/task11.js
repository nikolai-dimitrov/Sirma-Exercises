// 11. String Extension
/*Extend the built-in String object with additional functionality. Implement the following
methods:
 ensureStart(str): ensures the current string starts with the given str.
 ensureEnd(str): ensures the current string ends with the given str.
 isEmpty(): returns true if the string is empty, false otherwise.
 capitalize(): returns the string with the first letter capitalized.
 truncateWords(n): returns the string truncated to n words, appending an ellipsis if
necessary.*/

String.prototype.ensureStart = function (str) {
	return this.toLowerCase().startsWith(str.toLowerCase());
};
String.prototype.ensureEnd = function (str) {
	return this.toLowerCase().endsWith(str.toLowerCase());
};
String.prototype.isEmpty = function () {
	return this.length < 1 ? true : false;
};
String.prototype.capitalize = function () {
	if (this.length > 0) {
		let capitalizedFirstLetter = this[0].toUpperCase();
		let strWithOutFirstLetter = this.slice(1, this.length);
		const resultString = capitalizedFirstLetter + strWithOutFirstLetter;
		return resultString;
	}
	return this;
};
String.prototype.truncateWords = function (n) {
    let stringAsArray = this.split(" ")
    let truncatedString = stringAsArray.slice(0, n).join(" ");
    if (n < stringAsArray.length) {
        truncatedString += '...';
    }
    return truncatedString;
};

let str = "somestring".capitalize();
console.log(str.ensureStart("som"));
console.log(str.ensureEnd("ing"));
console.log(str.isEmpty());

let sentenceStr = "Hello this is test truncate string";
console.log(sentenceStr.truncateWords(5));
