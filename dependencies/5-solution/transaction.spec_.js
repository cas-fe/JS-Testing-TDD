import { Transaction } from '../transaction'
import { describe, beforeEach, it, expect, vi } from 'vitest'

/**
 * We develop iteratively, in small steps to isolate failures. So we
 * 1. create the spec
 * 2. check if tests are failing
 * 3. implement the feature
 * 4. check if the tests are passing
 * 5. Do the whole iteration for the next SMALL feature
 *
 * So we can implement, test, version & integrate iterative in small steps
 * -> reduces errors, improves quality, creates a clean history.
 */
