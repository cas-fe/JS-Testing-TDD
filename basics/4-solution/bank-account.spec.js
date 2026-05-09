import { describe, beforeEach, it, expect, vi } from 'vitest'
import { BankAccount } from '../bank-account'

/**
 * Test First Development
 * 1. Write spec
 * 2. Run tests -> tests fail
 * 3. Implement feature & run tests again until they pass
 */
 
 // 100$ bank account test suite
describe('A bank account with balance of 100$', function() {
	let account

	beforeEach(function() {
		account = new BankAccount()
		account.balance = 100
	})

	it('should return false when withdraw of balance lower than or equals 0$', function() {
		expect(account.withdraw(0)).toBeFalsy()
	})
	
	// and other specs from 3-specs/bank-account.spec.js
})
