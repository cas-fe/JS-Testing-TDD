import { describe, beforeEach, it, expect } from 'vitest'
import parse from './calculator';

describe('A string calculator (Step 2)', function () {
    
    // add and run specs from step1

    /**
     * Allow adding 3 numbers.
     */
    it('should allow adding 3 numbers.', function() {
        expect(parse('1,2,3')).toBe(6)
    })

    /**
     * Adding 4 and more number throws an error.
     */
    it('should throw an "illegal argument exception" when adding 4 and more numbers.', function() {
        expect(() => parse('1,2,3,4')).toThrow('illegal argument exception')
    })

    /**
     * Allow to handle new lines between number.
     */
    it('should allow to handle new lines between number.', function() {
        expect(parse('1\n2,3')).toBe(6)
        expect(parse('3\n4\n5')).toBe(12)
    })

    /**
     * Allow to handle 2,4,4 as 9.
     */
    it('should allow to handle new lines between number.', function() {
        expect(parse('2,4,4')).toBe(9)
    })
})