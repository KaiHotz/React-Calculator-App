import React from 'react'
import PropTypes from 'prop-types'
import PointTarget from 'react-point'
import './styles.scss'

const CalculatorKey = ({ onClick, className, children }) => (
  <PointTarget onPoint={onClick}>
    <button className={`calculator-key ${className}`} type="button">
      {children}
    </button>
  </PointTarget>
)

CalculatorKey.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CalculatorKey.defaultProps = {
  className: null,
  children: null,
}

export default CalculatorKey
