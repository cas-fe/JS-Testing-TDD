import { describe, beforeEach, it, expect } from 'vitest'
import { Stack } from './stack'

describe('Stack', function() {
  beforeEach(() => {
  })

  it('should be empty when newly created.', function() {
    const sut = new Stack<string>()
    expect(sut.isEmpty).toBeTruthy()
  });

  // for more tests see ../../smells
})


