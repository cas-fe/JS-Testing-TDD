import { Transaction } from '../transaction'
import { describe, beforeEach, it, expect, vi } from 'vitest'

describe('A new transaction of 25$', function() {
	let accountA
	let accountB
	let transaction

	beforeEach(function() {
		// Methodstub for Date.now()
		vi.spyOn(Date, 'now').mockImplementation(() => new Date('2021-06-22T09:49:51.010Z'))

		// Banc account fake
		const BankAccountFake = class {
			withdraw() {}
			deposit() {}
		}

		accountA = new BankAccountFake()
		accountB = new BankAccountFake()
		transaction = new Transaction(accountA, accountB, 25)
	})

	it('has transaction date 2021-06-22T09:49:51.010Z', function() {
		expect(transaction.date).toEqual(new Date('2021-06-22T09:49:51.010Z'))
	})

	it('has an amount of 25$', function() {
		expect(transaction.amount).toBe(25);
	})

	it('is not yet completed', function() {
		expect(transaction.completed).toBe(false)
	})
})
