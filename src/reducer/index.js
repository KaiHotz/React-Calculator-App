import { CalculatorOperations } from '../utils/helper'

export const initialState = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForOperand: false,
}

export const reducer = (state, { type, value }) => {
  switch (type) {
    case 'inputDigit': {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: String(value),
          waitingForOperand: false,
        }
      }

      return {
        ...state,
        displayValue: state.displayValue === '0' ? String(value) : state.displayValue + value,
      }
    }
    case 'inputDot': {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: '0.',
          waitingForOperand: false,
        }
      }

      return {
        ...state,
        displayValue: `${state.displayValue}.`,
        waitingForOperand: false,
      }
    }

    case 'inputPercent': {
      const currentValue = parseFloat(state.displayValue)
      if (currentValue !== 0) {
        const fixedDigits = state.displayValue.replace(/^-?\d*\.?/, '')
        const newValue = parseFloat(state.displayValue) / 100

        return {
          ...state,
          displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
        }
      }
    }
      break
    case 'toggleSign': {
      const newValue = parseFloat(state.displayValue) * -1

      return {
        ...state,
        displayValue: String(newValue),
      }
    }

    case 'clearLastChar':
      return {
        ...state,
        displayValue: state.displayValue.substring(0, state.displayValue.length - 1) || '0',
      }

    case 'clearDisplay':
      return {
        ...state,
        displayValue: '0',
      }

    case 'performOperation': {
      const inputValue = parseFloat(state.displayValue)

      if (state.value == null) {
        return {
          ...state,
          value: inputValue,
          operator: value,
          waitingForOperand: true,
        }
      }

      if (state.operator) {
        const currentValue = state.value || 0
        const newValue = CalculatorOperations[state.operator].func(currentValue, inputValue)

        return {
          value: newValue,
          displayValue: String(newValue),
          operator: value,
          waitingForOperand: true,
        }
      }

      return {
        ...state,
        operator: value,
        waitingForOperand: false,
      }
    }

    case 'clearAll':
      return initialState

    default:
      return initialState
  }
}
