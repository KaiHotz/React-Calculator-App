import { useState, useEffect, useReducer } from 'react'
import { CalculatorOperations } from '../utils/helper'
import { reducer, initialState } from '../reducer'

export const useScale = ref => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const { parentNode } = ref?.current
    const availableWidth = parentNode.offsetWidth
    const actualWidth = ref?.current.offsetWidth
    const actualScale = availableWidth / actualWidth
    if (scale === actualScale) { return }

    if (actualScale < 1) {
      setScale(actualScale)
    } else if (scale < 1) {
      setScale(1)
    }
  })

  return scale
}

export const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = (type, value = null) => () => {
    dispatch({ type, value })
  }

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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return [state, handleClick]
}
