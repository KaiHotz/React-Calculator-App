import React from 'react'
import PropTypes from 'prop-types'
import PointTarget from 'react-point'
import './styles.scss'

const calculatorKey = ({ onClick, className, children }) => (
  <PointTarget onPoint={onClick}>
    <button className={`calculator-key ${className}`} type="button">
      {children}
    </button>
  </PointTarget>
)

calculatorKey.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

calculatorKey.defaultProps = {
  className: null,
}

export default calculatorKey
