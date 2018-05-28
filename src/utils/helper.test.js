import { getFormattedValue } from './helper'

describe('Format value', () => {
  it('should work', () => {
    expect(getFormattedValue('5.7')).toBe('5.7')
  })
})
