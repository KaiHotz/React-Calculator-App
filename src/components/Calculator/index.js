import React, { useEffect, useReducer } from 'react'
import _ from 'lodash'
import CalculatorDisplay from '../CalculatorDisplay'
import CalculatorKey from '../CalculatorKey'
import { CalculatorOperations, DigitKeys } from '../../utils/helper'
import { reducer, initialState } from '../../reducer'
import './styles.scss'

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') { key = '=' }

    if ((/\d/).test(key)) {
      event.preventDefault()
      dispatch({ type: 'inputDigit', value: parseInt(key, 10) })
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      dispatch({ type: 'performOperation', value: key })
    } else if (key === ',') {
      event.preventDefault()
      dispatch({ type: 'inputDot' })
    } else if (key === '.') {
      event.preventDefault()
      dispatch({ type: 'inputDot' })
    } else if (key === '%') {
      event.preventDefault()
      dispatch({ type: 'inputPercent' })
    } else if (key === 'Backspace') {
      event.preventDefault()
      dispatch({ type: 'clearLastChar' })
    } else if (key === 'Clear') {
      event.preventDefault()

      if (state.displayValue !== '0') {
        dispatch({ type: 'clearDisplay' })
      } else {
        dispatch({ type: 'clearAll' })
      }
    }
  }

  const handleClick = (type, value = null) => () => {
    dispatch({ type, value })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div className="calculator">
      <CalculatorDisplay value={state.displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey
              className="key-clear"
              onClick={handleClick(state.displayValue !== '0' ? 'clearDisplay' : 'clearAll')}
            >
              {state.displayValue !== '0' ? 'C' : 'AC'}
            </CalculatorKey>
            <CalculatorKey
              className="key-sign"
              onClick={handleClick('toggleSign')}
            >
              ±
            </CalculatorKey>
            <CalculatorKey
              className="key-percent"
              onClick={handleClick('inputPercent')}
            >
              %
            </CalculatorKey>
          </div>
          <div className="digit-keys">
            {
              DigitKeys.map(digit => (
                <CalculatorKey
                  key={`key-${digit}`}
                  className={`key-${digit}`}
                  onClick={handleClick('inputDigit', digit)}
                >
                  {digit}
                </CalculatorKey>
              ))
            }
            <CalculatorKey
              className="key-dot"
              onClick={handleClick('inputDot')}
            >
              ●
            </CalculatorKey>
          </div>
        </div>
        <div className="operator-keys">
          {
            _.map(CalculatorOperations, (value, key) => (
              <CalculatorKey
                key={`key-${value.name}`}
                className={`key-${value.name}`}
                onClick={handleClick('performOperation', key)}
              >
                {value.symbol}
              </CalculatorKey>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Calculator
