import { Transaction } from '../transaction'
import { describe, beforeEach, it, expect, vi } from 'vitest'

describe('A new transaction of 25$', function() {
	let accountA
	let accountB
	let transaction

	beforeEach(function() {
		// Methodstub for Date.now()
		vi.spyOn(Date, 'now').mockImplementation(() => new Date('2021-06-22T09:49:51.010Z'));

		// Bank account fake
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

	it('has an amount of 25', function() {
		expect(transaction.amount).toBe(25)
	})

	it('is not yet completed', function() {
		expect(transaction.completed).toBe(false)
	})


	describe('when executed', function() {
		beforeEach(function() {
			vi.spyOn(accountA, 'withdraw')
			vi.spyOn(accountB, 'deposit')
			transaction.execute()
		})

		it('withdraws 25 from account A', function() {
			expect(accountA.withdraw).toHaveBeenCalledWith(25)
		})

		it('deposits 25 to account B', function() {
			expect(accountB.deposit).toHaveBeenCalledWith(25)
		})

		it('is completed', function() {
			expect(transaction.completed).toBe(true)
		})
	})
})
