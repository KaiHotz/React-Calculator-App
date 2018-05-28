import React from 'react'
import { shallow } from 'enzyme'

import AutoScalingText from './index'

describe('<AutoScalingText />', () => {
  it('should render', () => {
    const wrapper = shallow(<AutoScalingText />)

    expect(wrapper).toBeDefined()
  })

  it('should show children', () => {
    const props = {
      children: 'dwadaw'
    }
    const wrapper = shallow(<AutoScalingText {...props} />)

    expect(wrapper.text()).toBe(props.children)
  })
})
