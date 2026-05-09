import { describe, beforeEach, it, expect, vi } from 'vitest'
import Calculator from './calculator'
import CalculationHistory from './calculation-history'


describe('A string calculator (Step 3)', function () {

    const INITIAL_DATA = [ 1, 2, 6 ]
    let sut
    let storage

    beforeEach(function() {
        storage = new CalculationHistory()
        vi.spyOn(storage, 'load').mockImplementation(() => [ ...INITIAL_DATA ])
        vi.spyOn(storage, 'store')
        sut = new Calculator(storage)
    })

    /**
     * Results should be loaded from the localStorage.
     */
    it('should initially load results from the history.', function() {
        expect(storage.load).toHaveBeenCalled()
        expect(sut.history).toEqual(INITIAL_DATA)
    })

    /**
     * Results should be stored to localStorage in a history.
     */
    it('should store results to the history.', function() {
        sut.exec('9,10')
        expect(storage.store).toHaveBeenCalledWith([ ...INITIAL_DATA, 19 ])
    })

})