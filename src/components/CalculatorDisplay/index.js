import React from 'react'
import PropTypes from 'prop-types'
import AutoScalingText from '../AutoScalingText'
import './styles.css'

const calculatorDisplay = ({ value, ...props }) => {
  const language = navigator.language || 'en-US'
  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6
  })

  const match = value.match(/\.\d*?(0*)$/)

  if (match) { formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0] }

  if (formattedValue.length >= 16) {
    formattedValue = String(parseFloat(value).toExponential())
  }

  return (
    <div {...props} className="calculator-display">
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  )
}

calculatorDisplay.propTypes = {
  value: PropTypes.string
}

calculatorDisplay.defaultProps = {
  value: '0'
}

export default calculatorDisplay
