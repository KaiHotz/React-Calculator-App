import React, {
  useState, useRef, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const AutoScalingText = ({ children }) => {
  const [scale, setScale] = useState(1)
  const node = useRef()

  useEffect(() => {
    const { parentNode } = node?.current
    const availableWidth = parentNode.offsetWidth
    const actualWidth = node?.current.offsetWidth
    const actualScale = availableWidth / actualWidth
    if (scale === actualScale) { return }

    if (actualScale < 1) {
      setScale(actualScale)
    } else if (scale < 1) {
      setScale(1)
    }
  })

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
