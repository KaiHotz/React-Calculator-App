import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<Aoo />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toBeDefined()
  })
})
