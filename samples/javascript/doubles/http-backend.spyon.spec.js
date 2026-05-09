import { describe, beforeEach, it, expect, vi } from 'vitest'
import { BusinessService, HttpBackend } from '../services';

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ]
  let sut
  let testMock
  let loadDataSpy

  beforeEach(() => {
    testMock = new HttpBackend()
    loadDataSpy = vi.spyOn(testMock, 'loadData').mockImplementation(() => SERVICE_DATA)
    sut = new BusinessService(testMock)
  })

  it('should accommodate elements (provided by spyOn).', function() {
    const loadedData = sut.getData()
    expect(loadedData).toEqual(SERVICE_DATA)
    expect(loadDataSpy.mock.calls[0]).toEqual([ undefined ])
  })
})


