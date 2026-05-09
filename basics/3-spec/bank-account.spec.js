import { describe, beforeEach, it, expect } from 'vitest'
import { BankAccount } from './bank-account'

// new bank account test suite
describe('A new bank account', function() {
	let account

	beforeEach(function() {
		account = new BankAccount()
	})

	it('is initialized by a balance of 0$', function() {
		expect(account.balance).toBe(0)
	})

	it('should not allow a withdraw without balance', function() {
		account.withdraw(50)
		expect(account.balance).toBe(0)
	})

	it('should have a balance of 50$ after a deposit of 50$', function() {
		account.deposit(50)
		expect(account.balance).toBe(50)
	})
	
})

// bank account test suite with amount larger than 0$ (e.g. 50$)
describe('A bank account of balance larger than 0$ (amount of 50$)', function() {
	let account

	beforeEach(function() {
		account = new BankAccount()
		account.balance = 50
	})

	it('should not allow to withdraw amounts larger than 25% [50$ => 13$ (26%)]', function() {
		account.withdraw(13)
		expect(account.balance).toBe(50)
	})

	it('should allow to withdraw amounts lower than 25% [50$ => 12.5$ (25%)]', function() {
		account.withdraw(12.5)
		expect(account.balance).toBe(37.5)
	})
})