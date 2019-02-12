import React from 'react'
import _ from 'lodash'
import CalculatorDisplay from '../CalculatorDisplay'
import CalculatorKey from '../CalculatorKey'
import { CalculatorOperations, DigitKeys } from '../../utils/helper'
import { useCalculator } from '../../hooks'
import './styles.scss'

const Calculator = () => {
  const [state, handleClick] = useCalculator()

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
