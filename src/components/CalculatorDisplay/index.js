import React from 'react'
import PropTypes from 'prop-types'
import AutoScalingText from '../AutoScalingText'
import { getFormattedValue } from '../../utils'
import './styles.css'

const calculatorDisplay = ({ value, ...props }) => (
  <div {...props} className="calculator-display">
    <AutoScalingText>{getFormattedValue(value)}</AutoScalingText>
  </div>
)

calculatorDisplay.propTypes = {
  value: PropTypes.string
}

calculatorDisplay.defaultProps = {
  value: '0'
}

export default calculatorDisplay
