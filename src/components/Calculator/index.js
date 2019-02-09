import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import CalculatorDisplay from '../CalculatorDisplay'
import CalculatorKey from '../CalculatorKey'
import { CalculatorOperations, DigitKeys } from '../../utils/helper'
import './styles.scss'

const Calculator = () => {
  const [value, setValue] = useState(null)
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = digit => () => {
    if (waitingForOperand) {
      setDisplayValue(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit)
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.')
      setWaitingForOperand(false)
    } else if (!(/\./).test(displayValue)) {
      setDisplayValue(`${displayValue}.`)
      setWaitingForOperand(false)
    }
  }

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) { return }

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)))
  }

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1
    setDisplayValue(String(newValue))
  }

  const clearLastChar = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1) || '0')
  }

  const clearDisplay = () => {
    setDisplayValue('0')
  }

  const clearAll = () => {
    setValue(null)
    setDisplayValue('0')
    setOperator(null)
    setWaitingForOperand(false)
  }

  const performOperation = nextOperator => () => {
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      setValue(inputValue)
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator].func(currentValue, inputValue)

      setValue(newValue)
      setDisplayValue(String(newValue))
    }

    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') { key = '=' }

    if ((/\d/).test(key)) {
      event.preventDefault()
      inputDigit(parseInt(key, 10))()
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      performOperation(key)()
    } else if (key === ',') {
      event.preventDefault()
      inputDot()
    } else if (key === '.') {
      event.preventDefault()
      inputDot()
    } else if (key === '%') {
      event.preventDefault()
      inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()

      if (displayValue !== '0') {
        clearDisplay()
      } else {
        clearAll()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey
              className="key-clear"
              onClick={displayValue !== '0' ? clearDisplay : clearAll}
            >
              {displayValue !== '0' ? 'C' : 'AC'}
            </CalculatorKey>
            <CalculatorKey
              className="key-sign"
              onClick={toggleSign}
            >
              ±
            </CalculatorKey>
            <CalculatorKey
              className="key-percent"
              onClick={inputPercent}
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
                  onClick={inputDigit(digit)}
                >
                  {digit}
                </CalculatorKey>
              ))
            }
            <CalculatorKey
              className="key-dot"
              onClick={inputDot}
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
                onClick={performOperation(key)}
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
