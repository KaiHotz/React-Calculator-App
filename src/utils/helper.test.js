import { getFormattedValue, CalculatorOperations } from './helper'

describe('Format value', () => {
  it('should work', () => {
    const value = '5.7'
    expect(getFormattedValue(value)).toBe(value)
  })
})

describe('Calculator Operations', () => {
  it('should divide', () => {
    expect(CalculatorOperations['/'].func(6, 2)).toBe(3)
  })

  it('should multiply', () => {
    expect(CalculatorOperations['*'].func(6, 2)).toBe(12)
  })

  it('should subtract', () => {
    expect(CalculatorOperations['-'].func(6, 2)).toBe(4)
  })

  it('should add', () => {
    expect(CalculatorOperations['+'].func(6, 2)).toBe(8)
  })

  it('should return result', () => {
    expect(CalculatorOperations['='].func(6, 2)).toBe(2)
  })
})
