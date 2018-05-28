import { getFormattedValue } from './helper'

describe('Format value', () => {
  it('should work', () => {
    const value = '5.7'
    expect(getFormattedValue(value)).toBe(value)
  })
})
