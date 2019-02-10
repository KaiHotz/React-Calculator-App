import { useState, useEffect } from 'react'

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

export default useScale

