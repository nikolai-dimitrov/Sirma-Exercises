// 9. Library System
/*Create a LibraryItem class with properties title and author. Extend it with Book and
Magazine classes. Add methods to display details specific to books and magazines. */

class LibraryItem {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
}

class Book extends LibraryItem {
	constructor(title, author, genre) {
		super(title, author);
		this.genre = genre;
	}

	getGenre() {
		return `${this.title} is ${this.genre}`;
	}
}

class Magazine extends LibraryItem {
	constructor(title, author, salesRating) {
		super(title, author);
		this.salesRating = salesRating;
	}
	getSalesRating() {
		return `${this.title} sales rating is ${this.salesRating}`;
	}
}

const book = new Book("JK", "History of my life", "Bio");
console.log(book.getGenre());

const magazine = new Magazine("Tradings Today", "Richard", 5.5);
console.log(magazine.getSalesRating());
