import React from 'react'
import PropTypes from 'prop-types'
import AutoScalingText from '../AutoScalingText'
import { getFormattedValue } from '../../utils/helper'
import './styles.css'

const CalculatorDisplay = ({ value }) => (
  <div className="calculator-display">
    <AutoScalingText>{getFormattedValue(value)}</AutoScalingText>
  </div>
)

CalculatorDisplay.propTypes = {
  value: PropTypes.string,
}

CalculatorDisplay.defaultProps = {
  value: '0',
}

export default CalculatorDisplay
