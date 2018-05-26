import React from 'react'
import PropTypes from 'prop-types'
import PointTarget from 'react-point'

const calculatorKey = ({ onClick, className, ...props }) => (
  <PointTarget onPoint={onClick}>
    <button className={`calculator-key ${className}`} {...props} />
  </PointTarget>
)

calculatorKey.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

calculatorKey.defaultPtops = {
  className: null
}

export default calculatorKey
