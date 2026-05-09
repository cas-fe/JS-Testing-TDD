'use strict';

/* 1-initial: */
export class Transaction {

	/* 2-spec:
	constructor(accountA, accountB, amount) {}
	*/

	/* 3-implementation:
	constructor(accountA, accountB, amount) {
		this.date = Date.now()
		this.amount = amount
		this.completed = false
	}
	*/

	/* 5-solution: */
	constructor(accountA, accountB, amount) {
		this.accountA = accountA;
		this.accountB = accountB;
		this.date = Date.now();
		this.amount = amount;
		this.completed = false;
	}

	execute() {
		this.accountA.withdraw(this.amount);
		this.accountB.deposit(this.amount);
		this.completed = true;
	}
};
