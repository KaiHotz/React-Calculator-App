import React from 'react';
import { shallow } from 'enzyme';
import { CalculatorDisplay } from './CalculatorDisplay';

describe('<CalculatorDisplay />', () => {
  it('should render', () => {
    const wrapper = shallow(<CalculatorDisplay />);

    expect(wrapper).toMatchSnapshot();
  });
});
