// 16. Bank System
/* Create a class hierarchy for a bank system:
 BankAccount: properties accountNumber, balance, methods deposit(amount),
withdraw(amount), and getBalance().
 Subclass SavingsAccount: additional property interestRate, method applyInterest().
 Subclass CheckingAccount: additional property overdraftLimit, override
withdraw(amount) to account for overdraft. */

class BankAccount {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}
	deposit(amount) {
		this.balance += amount;
		console.log(`You successfully deposited ${amount}$`);
	}

	withdraw(amount) {
		if (amount > this.balance) {
			throw new Error("You do not have enough balance.");
		}
		this.balance -= amount;
		console.log(`You successfully withdrew ${amount}$`);
	}

	getBalance() {
		console.log(`Your account balance is: ${this.balance}`);
	}
}

class SavingsAccount extends BankAccount {
	constructor(accountNumber, balance, interestRate) {
		super(accountNumber, balance);
		this.interestRate = interestRate;
	}
	applyInterest() {
		let interestAmount = (this.balance * this.interestRate) / 100;
		this.balance += interestAmount;
	}
}

class CheckingAccount extends BankAccount {
	constructor(accountNumber, balance, overdraftLimit) {
		super(accountNumber, balance);
		this.overdraftLimit = overdraftLimit;
	}
	withdraw(amount) {
		if (amount > this.overdraftLimit) {
			throw new Error("You cannot exceed your overdraft limit.");
		}
		this.overdraftLimit -= amount;

		// let overdraftAmount = Math.abs(this.balance - amount)
		// if (overdraftAmount > this.overdraftLimit) {
		// 	throw new Error("You cannot exceed your overdraft limit.");
		// }
		// this.balance -= amount;
	}
}

const checkingAccount = new CheckingAccount("5467 2317 4732 1884", 1000, 300);
checkingAccount.withdraw(270);
console.log(checkingAccount);
