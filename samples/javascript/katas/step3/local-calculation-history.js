import { describe, beforeEach, it, expect } from 'vitest'
import { LocalStorage } from 'node-localstorage'

const localStorage = new LocalStorage('./calculator')

const HISTORY_KEY = 'CalculationResult'

/**
 * Provides the basic interface to store/load data from/to the history.
 */
export default class LocalCalculationHistory {
    /**
     * Loads the data from the node local storage.
     */
    load() {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[ ]' )
    }

    /**
     * Saves the data into the node local storage.
     */
    store(history) {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    }

    reset() {
        localStorage.removeItem(HISTORY_KEY)
    }
}
