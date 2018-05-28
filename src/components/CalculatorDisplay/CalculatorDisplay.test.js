import React from 'react'
import { shallow } from 'enzyme'

import CalculatorDisplay from './index'

describe('<CalculatorDisplay />', () => {
  it('should render', () => {
    const wrapper = shallow(<CalculatorDisplay />)

    expect(wrapper).toBeDefined()
  })
})
