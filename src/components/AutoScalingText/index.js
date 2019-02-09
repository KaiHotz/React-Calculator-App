import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useScale } from '../../utils/hooks'
import './styles.css'

const AutoScalingText = ({ children }) => {
  const node = useRef()
  const scale = useScale(node)

  return (
    <div
      className="auto-scaling-text"
      style={{ transform: `scale(${scale},${scale})` }}
      ref={node}
    >
      {children}
    </div>
  )
}

AutoScalingText.propTypes = {
  children: PropTypes.string,
}

AutoScalingText.defaultProps = {
  children: '0',
}

export default AutoScalingText
